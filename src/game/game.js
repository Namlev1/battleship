import {
  showEnemyWon,
  showPlayerWon,
  showRoundButton,
  toggleRoundButton
} from '../dom/mainPageDom'
import PlayerBoard from './playerBoard'
import EnemyBoard from './enemyBoard'

export default class Game {
  constructor() {
    this.playerBoard = new PlayerBoard(this.onAllShipsPlaced.bind(this))
    this.enemyBoard = new EnemyBoard(this.handlePlayerAttack.bind(this))

    this.initializeBoards()
  }

  initializeBoards() {
    this.playerBoard.enable()
    this.enemyBoard.disable()
  }

  handlePlayerAttack([x, y]) {
    if (!this.enemyBoard.isAvailableToHit([x, y])) return

    const isHit = this.enemyBoard.receiveAttack([x, y])
    if (isHit) {
      if (this.enemyBoard.isAllShipsSunk()) {
        showPlayerWon()
      }
      return
    }

    this.switchToEnemyTurn()
  }

  handleEnemyAttack([x, y]) {
    const isHit = this.playerBoard.receiveAttack([x, y])
    if (isHit) {
      if (this.playerBoard.isAllShipsSunk()) {
        showEnemyWon()
        return
      }
      this.attackRandomPlayerField()
    } else {
      this.switchToPlayerTurn()
    }
  }

  onAllShipsPlaced() {
    this.startGame()
  }

  startGame() {
    this.playerBoard.hidePlayButton()
    this.playerBoard.clearCellsColor()
    this.playerBoard.disable()
    this.enemyBoard.placeRandomly()
    this.enemyBoard.enable()

    this.setGameStarted()
    showRoundButton()
  }

  attackRandomPlayerField() {
    setTimeout(() => {
      const attackCoords = this.getRandomCoords()
      this.handleEnemyAttack(attackCoords)
    }, 1000)
  }

  getRandomCoords() {
    let coords
    do {
      const x = Math.floor(Math.random() * this.enemyBoard.sideLength)
      const y = Math.floor(Math.random() * this.enemyBoard.sideLength)
      coords = [x, y]
    } while (!this.playerBoard.isAvailableToHit(coords))
    return coords
  }

  switchToEnemyTurn() {
    this.enemyBoard.disable()
    this.playerBoard.enable()
    this.attackRandomPlayerField()
    toggleRoundButton()
  }

  switchToPlayerTurn() {
    this.playerBoard.disable()
    this.enemyBoard.enable()
    toggleRoundButton()
  }

  setGameStarted() {
    this.playerBoard.startGame()
    this.enemyBoard.startGame()
  }
}
