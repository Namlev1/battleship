import Board from './board'
import { showRoundButton, toggleRoundButton } from '../dom/createHomePage'

export default class Game {
  playerBoard

  enemyBoard

  constructor() {
    this.playerBoard = new Board(
      'player',
      this.onAllShipsPlaced.bind(this),
      () => {}
    )
    this.playerBoard.enable()
    this.enemyBoard = new Board(
      'enemy',
      () => {},
      this.#attackedEnemy.bind(this)
    )
    this.enemyBoard.disable()
  }

  attackRandomPlayerField = () => {
    setTimeout(() => {
      const attackCoords = this.#getRandomCoords()
      this.#attackedPlayer(attackCoords)
    }, 1000)
  }

  #start() {
    this.playerBoard.hidePlayButton()
    this.playerBoard.clearCellsColor()
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

  #attackedEnemy([x, y]) {
    const isHit = this.enemyBoard.receiveAttack([x, y])
    if (isHit) {
      return
    }
    this.enemyBoard.disable()
    this.playerBoard.enable()
    this.attackRandomPlayerField()
    toggleRoundButton()
  }

  #attackedPlayer([x, y]) {
    const isHit = this.playerBoard.receiveAttack([x, y])
    if (isHit) {
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
