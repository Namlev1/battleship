import Ship from './ship'

export default class Gameboard {
  SENTRY = true

  constructor() {
    this.sideLength = 10
    this.missCount = 0
    this.shipCount = 0
    this.sunkCount = 0
    this.board = new Array(this.sideLength)
    for (let i = 0; i < this.sideLength; i++) {
      this.board[i] = new Array(this.sideLength)
    }

    this.ships = []
    this.ships.push(new Ship(2))
    this.ships.push(new Ship(3))
    this.ships.push(new Ship(3))
    this.ships.push(new Ship(4))
    this.ships.push(new Ship(5))
  }

  #isOccupied(x, y) {
    return this.board[x][y]
  }

  #isOutOfBounds(x, y) {
    return x >= this.sideLength || y >= this.sideLength
  }

  #throwIfInvalid(ship, x, y, getNextCoord) {
    for (let i = 0; i < ship.length; i++) {
      const [nextX, nextY] = getNextCoord(x, y, i)
      if (this.#isOccupied(nextX, nextY)) {
        throw new Error('Ships overlap')
      }
      if (this.#isOutOfBounds(nextX, nextY)) {
        throw new Error('Ship placed out of board bounds')
      }
    }
  }

  #throwIfInvalidVertically(ship, x, y) {
    this.#throwIfInvalid(ship, x, y, (x, y, i) => [x, y + i])
  }

  #throwIfInvalidHorizontally(ship, x, y) {
    this.#throwIfInvalid(ship, x, y, (x, y, i) => [x + i, y])
  }

  #placeVertically(x, y, ship) {
    this.#throwIfInvalidVertically(ship, x, y)
    for (let i = 0; i < ship.length; i++) {
      this.board[x][y + i] = ship
    }
    this.shipCount += 1
  }

  #placeHorizontally(x, y, ship) {
    const affectedPositions = []
    this.#throwIfInvalidHorizontally(ship, x, y)

    this.#putShipOnTheGameboard(ship, x, y, affectedPositions)
    this.#adjustAdjacentCells(x, ship, y, affectedPositions)

    this.shipCount += 1
    return affectedPositions
  }

  #adjustAdjacentCells(x, ship, y, affectedPositions) {
    const start = x === 0 ? x : x - 1
    const end =
      x + ship.length >= this.sideLength ? this.sideLength - 1 : x + ship.length

    if (y > 0) this.#affectTopRow(start, end, affectedPositions, y)
    if (x > 0) this.#affectLeftCell(affectedPositions, start, y)
    if (x + ship.length < this.sideLength)
      this.#affectRightCell(affectedPositions, x, ship, y)
    if (y + 1 < this.sideLength)
      this.#affectBottomRow(start, end, affectedPositions, y)
  }

  #putShipOnTheGameboard(ship, x, y, affectedPositions) {
    for (let i = 0; i < ship.length; i++) {
      this.board[x + i][y] = ship
      affectedPositions.push([x + i, y])
    }
  }

  #affectBottomRow(start, end, affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      affectedPositions.push([i, y + 1])
      this.board[i][y + 1] = this.SENTRY
    }
  }

  #affectRightCell(affectedPositions, x, ship, y) {
    affectedPositions.push([x + ship.length, y])
    this.board[x + ship.length][y] = this.SENTRY
  }

  #affectLeftCell(affectedPositions, start, y) {
    affectedPositions.push([start, y])
    this.board[start][y] = this.SENTRY
  }

  #affectTopRow(start, end, affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      affectedPositions.push([i, y - 1])
      this.board[i][y - 1] = this.SENTRY
    }
  }

  place([x, y], shiplen, vertical = false) {
    const ship = this.ships.find(findShip => findShip.length === shiplen)
    if (vertical) return this.#placeVertically(x, y, ship)
    return this.#placeHorizontally(x, y, ship)
  }

  receiveAttack([x, y]) {
    if (this.#isOccupied(x, y)) {
      const ship = this.board[x][y]
      ship.hit()
      if (ship.isSunk()) this.sunkCount += 1
    } else {
      this.missCount += 1
    }
  }

  isAllShipsSunk() {
    return this.shipCount === this.sunkCount
  }

  willShipFitHorizontally(len, x) {
    return x + len <= this.sideLength
  }

  isPlaceAvailableHorizontally(len, x, y) {
    const start = x
    const end = x + len > this.sideLength ? this.sideLength : x + len
    for (let i = start; i < end; i++) {
      if (this.#isOccupied(i, y)) {
        return false
      }
    }
    return true
  }
}
