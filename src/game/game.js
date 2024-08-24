import Board from './board'

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

  #start() {
    this.playerBoard.hidePlayButton()
    this.playerBoard.clearCellsColor()
    this.enemyBoard.placeRandomly()
    this.enemyBoard.enable()
    this.playerBoard.disable()
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
  }

  attackRandomPlayerField() {
    const attackCoords = this.#getRandomCoords()
    this.#attackedPlayer(attackCoords)
  }

  #attackedPlayer([x, y]) {
    const isHit = this.playerBoard.receiveAttack([x, y])
    if (isHit) {
      this.attackRandomPlayerField()
    }
    this.playerBoard.disable()
    this.enemyBoard.enable()
  }

  onAllShipsPlaced() {
    this.#start()
  }
}
