import Board from './board'

export default class Game {
  #isPlayerRound = false

  playerBoard

  enemyBoard

  constructor() {
    this.playerBoard = new Board('player', this.onAllShipsPlaced.bind(this))
    this.enemyBoard = new Board('enemy')
  }

  #start() {
    this.playerBoard.clearCellsColor()
    this.enemyBoard.placeRandomly()
    this.#isPlayerRound = true
    console.log('starting game')
  }

  #getRandomCoords() {
    let x
    let y
    do {
      x = Math.floor(Math.random() * this.enemyBoard.sideLength)
      y = Math.floor(Math.random() * this.enemyBoard.sideLength)
    } while (!this.playerBoard.isAvailableToHit(x, y))

    return [x, y]
  }

  #attackedEnemy([x, y]) {
    const isHit = this.enemyBoard.receiveAttack(x, y)
    this.#isPlayerRound = false
    const attackCoords = this.#getRandomCoords()
    this.#attackedPlayer(attackCoords)
  }

  #attackedPlayer([x, y]) {
    const isHit = this.playerBoard.receiveAttack(x, y)
    this.#isPlayerRound = true
  }

  onAllShipsPlaced() {
    this.#start()
  }
}
