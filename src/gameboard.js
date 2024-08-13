export default class Gameboard {
  constructor() {
    this.xMax = 7
    this.yMax = 7
    this.missCount = 0
    this.shipCount = 0
    this.sunkCount = 0
    this.board = new Array(8)
    for (let i = 0; i <= this.xMax; i++) {
      this.board[i] = new Array(8)
    }
  }

  #isOccupied(x, y) {
    return this.board[x][y]
  }

  #isOutOfBounds(x, y) {
    return x > this.xMax || y > this.yMax
  }

  #throwIfInvalidVertically(ship, x, y) {
    for (let i = 0; i < ship.length; i++) {
      if (this.#isOccupied(x, y + i)) {
        throw new Error('Ships overlap')
      }
      if (this.#isOutOfBounds(x, y + i)) {
        throw new Error('Ship placed out of board bounds')
      }
    }
  }

  #throwIfInvalidHorizontally(ship, x, y) {
    for (let i = 0; i < ship.length; i++) {
      if (this.#isOutOfBounds(x + i, y)) {
        throw new Error('Ship placed out of board bounds')
      }
      if (this.#isOccupied(x + i, y)) {
        throw new Error('Ships overlap')
      }
    }
  }

  #placeVertically(x, y, ship) {
    this.#throwIfInvalidVertically(ship, x, y)
    for (let i = 0; i < ship.length; i++) {
      this.board[x][y + i] = ship
    }
    this.shipCount += 1
  }

  #placeHorizontally(x, y, ship) {
    this.#throwIfInvalidHorizontally(ship, x, y)
    for (let i = 0; i < ship.length; i++) {
      this.board[x + i][y] = ship
    }
    this.shipCount += 1
  }

  place(coords, ship, verticle = false) {
    const [x, y] = coords
    if (verticle) return this.#placeVertically(x, y, ship)
    return this.#placeHorizontally(x, y, ship)
  }

  receiveAttack(coords) {
    const [x, y] = coords
    if (this.#isOccupied(x, y)) {
      const ship = this.board[x][y]
      ship.hit()
      if (ship.isSunk())
        this.sunkCount += 1
    } else {
      this.missCount += 1
    }
  }

  isAllShipsSunk() {
    return this.shipCount === this.sunkCount
  }
}
