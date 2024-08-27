import {
  showEnemyWon,
  showPlayerWon,
  showRoundButton,
  toggleRoundButton
} from '../dom/createHomePage'
import PlayerBoard from './playerBoard'
import EnemyBoard from './enemyBoard'

export default class Game {
  playerBoard

  enemyBoard

  constructor() {
    this.playerBoard = new PlayerBoard(this.onAllShipsPlaced.bind(this))
    this.playerBoard.enable()
    this.enemyBoard = new EnemyBoard(this.#playerIsAttacking.bind(this))
    this.enemyBoard.disable()
  }

  attackRandomPlayerField = () => {
    setTimeout(() => {
      const attackCoords = this.#getRandomCoords()
      this.#enemyIsAttacking(attackCoords)
    }, 1000)
  }

  #start() {
    this.playerBoard.hidePlayButton()
    this.playerBoard.clearCellsColor()
    this.playerBoard.isGameStarted = true
    this.enemyBoard.isGameStarted = true
    this.enemyBoard.placeRandomly()
    this.enemyBoard.enable()
    this.playerBoard.disable()
    showRoundButton()
  }

  #getRandomCoords() {
    let x
    let y
    do {
      x = Math.floor(Math.random() * this.enemyBoard.sideLength)
      y = Math.floor(Math.random() * this.enemyBoard.sideLength)
    } while (!this.playerBoard.isAvailableToHit([x, y]))

    return [x, y]
  }

  #playerIsAttacking([x, y]) {
    if (!this.enemyBoard.isAvailableToHit([x, y])) {
      return
    }
    const isHit = this.enemyBoard.receiveAttack([x, y])
    if (isHit) {
      if (this.enemyBoard.isAllShipsSunk()) {
        showPlayerWon()
      }
      return
    }
    this.enemyBoard.disable()
    this.playerBoard.enable()
    this.attackRandomPlayerField()
    toggleRoundButton()
  }

  #enemyIsAttacking([x, y]) {
    const isHit = this.playerBoard.receiveAttack([x, y])
    if (isHit) {
      if (this.playerBoard.isAllShipsSunk()) {
        showEnemyWon()
        return
      }
      this.attackRandomPlayerField()
    } else {
      this.playerBoard.disable()
      this.enemyBoard.enable()
      toggleRoundButton()
    }
  }

  onAllShipsPlaced() {
    this.#start()
  }
}
