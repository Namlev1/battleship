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
        this.#board[i][j] = false
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
    const affectedPositions = []
    this.#throwIfInvalidVertically(ship, x, y)

    this.#putShipOnBoardVertically(ship, x, y, affectedPositions)
    this.#adjustAdjacentCellsVertically(x, ship, y, affectedPositions)

    this.shipCount += 1
    return affectedPositions
  }

  #placeHorizontally(x, y, ship) {
    const affectedPositions = []
    this.#throwIfInvalidHorizontally(ship, x, y)

    this.#putShipOnBoardHorizontally(ship, x, y, affectedPositions)
    this.#adjustAdjacentCellsHorizontally(x, ship, y, affectedPositions)

    this.shipCount += 1
    return affectedPositions
  }

  #adjustAdjacentCellsVertically(x, ship, y, affectedPositions) {
    const start = y === 0 ? y : y - 1
    const end =
      y + ship.length >= this.sideLength ? this.sideLength - 1 : y + ship.length

    if (x > 0) this.#affectColumn(start, end, affectedPositions, x - 1)
    if (y > 0) this.#affectCell(affectedPositions, x, y - 1)
    if (x + 1 < this.sideLength)
      this.#affectColumn(start, end, affectedPositions, x + 1)
    if (y + ship.length < this.sideLength)
      this.#affectCell(affectedPositions, x, y + ship.length)
  }

  #adjustAdjacentCellsHorizontally(x, ship, y, affectedPositions) {
    const start = x === 0 ? x : x - 1
    const end =
      x + ship.length >= this.sideLength ? this.sideLength - 1 : x + ship.length

    if (y > 0) this.#affectRow(start, end, affectedPositions, y - 1)
    if (x > 0) this.#affectCell(affectedPositions, x - 1, y)
    if (x + ship.length < this.sideLength)
      this.#affectCell(affectedPositions, x + ship.length, y)
    if (y + 1 < this.sideLength)
      this.#affectRow(start, end, affectedPositions, y + 1)
  }

  #putShipOnBoardVertically(ship, x, y, affectedPositions) {
    for (let i = 0; i < ship.length; i++) {
      this.#board[x][y + i] = ship
      affectedPositions.push([x, y + i])
    }
  }

  #putShipOnBoardHorizontally(ship, x, y, affectedPositions) {
    for (let i = 0; i < ship.length; i++) {
      this.#board[x + i][y] = ship
      affectedPositions.push([x + i, y])
    }
  }

  #affectCell(affectedPositions, x, y) {
    affectedPositions.push([x, y])
    this.#board[x][y] = this.#SENTRY
  }

  #affectColumn(start, end, affectedPositions, x) {
    for (let i = start; i <= end; i++) {
      this.#affectCell(affectedPositions, x, i)
    }
  }

  #affectRow(start, end, affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      this.#affectCell(affectedPositions, i, y)
    }
  }

  place([x, y], id, vertical) {
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

  willShipFitVertically(len, y) {
    return y + len <= this.sideLength
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

  isPlaceAvailableVertically(len, x, y) {
    const start = y
    const end = y + len > this.sideLength ? this.sideLength : y + len
    for (let i = start; i < end; i++) {
      if (this.#isOccupied(x, i)) {
        return false
      }
    }
    return true
  }

  #placeRandomlyVertically([x, y], ship) {
    if (this.isPlaceAvailableVertically(ship.length, x, y)) {
      this.#placeVertically(x, y, ship)
      return true
    }
    return false
  }

  #placeRandomlyHorizontally([x, y], ship) {
    if (this.isPlaceAvailableHorizontally(ship.length, x, y)) {
      this.#placeHorizontally(x, y, ship)
      return true
    }
    return false
  }

  #placeShipRandomly(ship, verticalShips) {
    while (true) {
      const isVertical = Math.random() >= 0.5
      const x = Math.floor(Math.random() * this.sideLength)
      const y = Math.floor(Math.random() * this.sideLength)
      try {
        this.place([x, y], ship.id, isVertical)
        if (isVertical) {
          verticalShips.push(ship.id)
        }
        return
      } catch (e) {}
    }
  }

  placeRandomly() {
    const verticalShips = []
    this.#placeShipRandomly(this.#ships[4], verticalShips)
    this.#placeShipRandomly(this.#ships[3], verticalShips)
    this.#placeShipRandomly(this.#ships[2], verticalShips)
    this.#placeShipRandomly(this.#ships[1], verticalShips)
    this.#placeShipRandomly(this.#ships[0], verticalShips)
    return verticalShips
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

  #checkColumn([start, end], affectedPositions, x) {
    for (let i = start; i <= end; i++) {
      if (!this.#hasNeighbourShip([x, i])) {
        affectedPositions.push([x, i])
        this.#board[x][i] = false
      }
    }
  }

  #checkRow([start, end], affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      if (!this.#hasNeighbourShip([i, y])) {
        affectedPositions.push([i, y])
        this.#board[i][y] = false
      }
    }
  }

  #checkCell([x, y], affectedPositions) {
    if (!this.#hasNeighbourShip([x, y])) {
      affectedPositions.push([x, y])
      this.#board[x][y] = false
    }
  }

  removeShipVertically([x, y], shipLen) {
    const affectedPositions = []
    for (let i = 0; i < shipLen; i++) {
      this.#board[x][y + i] = false
      affectedPositions.push([x, y + i])
    }
    const start = y === 0 ? y : y - 1
    const end =
      y + shipLen >= this.sideLength ? this.sideLength - 1 : y + shipLen

    if (x > 0) this.#checkColumn([start, end], affectedPositions, x - 1)
    if (y > 0) this.#checkCell([x, y - 1], affectedPositions)
    if (x + 1 < this.sideLength)
      this.#checkColumn([start, end], affectedPositions, x + 1)
    if (y + shipLen < this.sideLength)
      this.#checkCell([x, y + shipLen], affectedPositions)

    return affectedPositions
  }

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

  #markCellHit([x, y], affectedPositions) {
    affectedPositions.push([x, y])
    this.#hitBoard[x][y] = true
  }

  #markRowHit([start, end], affectedPositions, y) {
    for (let i = start; i <= end; i++) {
      this.#markCellHit([i, y], affectedPositions)
    }
  }

  #markColumnHit([start, end], affectedPositions, x) {
    for (let i = start; i <= end; i++) {
      this.#markCellHit([x, i], affectedPositions)
    }
  }

  markSurroundingMissVertically([x, y], shipLen) {
    const affectedPositions = []
    const beginY = this.#findShipYBeginning([x, y])
    const start = beginY === 0 ? beginY : beginY - 1
    const end =
      beginY + shipLen >= this.sideLength
        ? this.sideLength - 1
        : beginY + shipLen

    if (x > 0) this.#markColumnHit([start, end], affectedPositions, x - 1)
    if (beginY > 0) this.#markCellHit([x, beginY - 1], affectedPositions)
    if (x + 1 < this.sideLength)
      this.#markColumnHit([start, end], affectedPositions, x + 1)
    if (beginY + shipLen < this.sideLength)
      this.#markCellHit([x, beginY + shipLen], affectedPositions)

    return affectedPositions
  }

  markSurroundingMissHorizontally([x, y], shipLen) {
    const affectedPositions = []
    const beginX = this.#findShipXBeginning([x, y])
    const start = beginX === 0 ? beginX : beginX - 1
    const end =
      beginX + shipLen >= this.sideLength
        ? this.sideLength - 1
        : beginX + shipLen

    if (y > 0) this.#markRowHit([start, end], affectedPositions, y - 1)
    if (beginX > 0) this.#markCellHit([start, y], affectedPositions)
    if (beginX + shipLen < this.sideLength)
      this.#markCellHit([end, y], affectedPositions)
    if (y + 1 < this.sideLength)
      this.#markRowHit([start, end], affectedPositions, y + 1)

    return affectedPositions
  }

  markSurroundingMiss([x, y], shipLen, isVertical) {
    if (isVertical) {
      return this.markSurroundingMissVertically([x, y], shipLen)
    }
    return this.markSurroundingMissHorizontally([x, y], shipLen)
  }

  removeShip(coords, shipLen, vertical) {
    this.shipCount -= 1
    if (vertical) {
      return this.removeShipVertically(coords, shipLen)
    }
    return this.removeShipHorizontally(coords, shipLen)
  }

  #findShipXBeginning([x, y]) {
    let beginX = x
    while (beginX > 0 && this.#board[beginX - 1][y]) {
      beginX--
    }
    return beginX
  }

  #findShipYBeginning([x, y]) {
    let beginY = y
    while (beginY > 0 && this.#board[x][beginY - 1]) {
      beginY--
    }
    return beginY
  }
}
