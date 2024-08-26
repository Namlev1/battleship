import Ship from './ship'

export default class BoardLogic {
  #SENTRY = true

  #board

  #hitBoard

  #ships

  constructor() {
    this.sideLength = 10
    this.missCount = 0
    this.shipCount = 0
    this.sunkCount = 0
    this.#board = new Array(this.sideLength)
    this.#hitBoard = new Array(this.sideLength)
    for (let i = 0; i < this.sideLength; i++) {
      this.#board[i] = new Array(this.sideLength)
      this.#hitBoard[i] = new Array(this.sideLength)
      for (let j = 0; j < this.sideLength; j++) {
        this.#hitBoard[i][j] = false
      }
    }

    this.#ships = []
    this.#ships.push(new Ship(2, '2'))
    this.#ships.push(new Ship(3, '3a'))
    this.#ships.push(new Ship(3, '3b'))
    this.#ships.push(new Ship(4, '4'))
    this.#ships.push(new Ship(5, '5'))
  }

  isAllShipsPlaced() {
    return this.shipCount === this.#ships.length
  }

  #isOccupied(x, y) {
    return this.#board[x][y]
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
      this.#board[x][y + i] = ship
    }
    this.shipCount += 1
  }

  #placeHorizontally(x, y, ship) {
    const affectedPositions = []
    this.#throwIfInvalidHorizontally(ship, x, y)

    this.#putShipOnBoard(ship, x, y, affectedPositions)
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

  #putShipOnBoard(ship, x, y, affectedPositions) {
    for (let i = 0; i < ship.length; i++) {
      this.#board[x + i][y] = ship
      affectedPositions.push([x + i, y])
    }
  }

  #affectBottomRow(start, end, affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      affectedPositions.push([i, y + 1])
      this.#board[i][y + 1] = this.#SENTRY
    }
  }

  #affectRightCell(affectedPositions, x, ship, y) {
    affectedPositions.push([x + ship.length, y])
    this.#board[x + ship.length][y] = this.#SENTRY
  }

  #affectLeftCell(affectedPositions, start, y) {
    affectedPositions.push([start, y])
    this.#board[start][y] = this.#SENTRY
  }

  #affectTopRow(start, end, affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      affectedPositions.push([i, y - 1])
      this.#board[i][y - 1] = this.#SENTRY
    }
  }

  place([x, y], id, vertical = false) {
    const ship = this.#ships.find(findShip => findShip.id === id)
    if (vertical) return this.#placeVertically(x, y, ship)
    return this.#placeHorizontally(x, y, ship)
  }

  receiveAttack([x, y]) {
    let isHit = false
    let isSunk = false
    let shipId = null
    this.#hitBoard[x][y] = true
    if (this.#isOccupied(x, y)) {
      const ship = this.#board[x][y]
      isHit = true
      shipId = ship.id
      ship.hit()
      if (ship.isSunk()) {
        this.sunkCount += 1
        isSunk = true
      }
    }
    return { isHit, isSunk, shipId }
  }

  isAllShipsSunk() {
    return this.sunkCount === this.#ships.length
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

  placeRandomly() {
    for (let i = 0; i < 2; i++) {
      this.#board[i][0] = this.#ships[0]
    }
    for (let i = 0; i < 3; i++) {
      this.#board[i][2] = this.#ships[1]
    }
    for (let i = 0; i < 3; i++) {
      this.#board[i][4] = this.#ships[2]
    }
    for (let i = 0; i < 4; i++) {
      this.#board[i][6] = this.#ships[3]
    }
    for (let i = 0; i < 5; i++) {
      this.#board[i][8] = this.#ships[4]
    }
  }

  isAvailableToHit([x, y]) {
    return !this.#hitBoard[x][y]
  }

  clearNotShipCells() {
    for (let x = 0; x < this.sideLength; x++) {
      for (let y = 0; y < this.sideLength; y++) {
        if (this.#board[x][y] === this.#SENTRY) {
          this.#board[x][y] = false
        }
      }
    }
  }

  #hasNeighbourShip([x, y]) {
    const hasTopNeighbours = y !== 0
    const hasBottomNeighbours = y !== this.sideLength - 1
    const hasLeftNeighbours = x !== 0
    const hasRightNeighbours = x !== this.sideLength - 1

    if (hasTopNeighbours) {
      const start = hasLeftNeighbours ? x - 1 : x
      const end = hasRightNeighbours ? x + 1 : x
      for (let i = start; i <= end; i++) {
        if (this.#board[i][y - 1] instanceof Ship) {
          return true
        }
      }
    }
    if (hasLeftNeighbours && this.#board[x - 1][y] instanceof Ship) {
      return true
    }
    if (hasRightNeighbours && this.#board[x + 1][y] instanceof Ship) {
      return true
    }
    if (hasBottomNeighbours) {
      const start = hasLeftNeighbours ? x - 1 : x
      const end = hasRightNeighbours ? x + 1 : x
      for (let i = start; i <= end; i++) {
        if (this.#board[i][y + 1] instanceof Ship) {
          return true
        }
      }
    }
    return false
  }

  #checkRow([start, end], affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      console.log(`checking x:${i}, y:${y}`)
      if (!this.#hasNeighbourShip([i, y])) {
        affectedPositions.push([i, y])
        this.#board[i][y] = false
        console.log(`added x:${i}, y:${y}`)
      }
    }
  }

  #checkCell([x, y], affectedPositions) {
    if (!this.#hasNeighbourShip([x, y])) {
      affectedPositions.push([x, y])
      this.#board[x][y] = false
    }
  }

  removeShipVertically([x, y], shipLen) {}

  removeShipHorizontally([x, y], shipLen) {
    const affectedPositions = []
    for (let i = 0; i < shipLen; i++) {
      this.#board[x + i][y] = false
      affectedPositions.push([x + i, y])
    }
    const start = x === 0 ? x : x - 1
    const end =
      x + shipLen >= this.sideLength ? this.sideLength - 1 : x + shipLen

    if (y > 0) this.#checkRow([start, end], affectedPositions, y - 1)
    if (x > 0) this.#checkCell([start, y], affectedPositions)
    if (x + shipLen < this.sideLength)
      this.#checkCell([end, y], affectedPositions)
    if (y + 1 < this.sideLength)
      this.#checkRow([start, end], affectedPositions, y + 1)

    return affectedPositions
  }

  removeShip(coords, shipLen, vertical) {
    this.shipCount -= 1
    if (vertical) {
      return this.removeShipVertically(coords, shipLen)
    }
    return this.removeShipHorizontally(coords, shipLen)
  }
}
