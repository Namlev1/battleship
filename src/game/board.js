import BoardLogic from '../logic/boardLogic'

export default class Board {
  boardDom

  boardLogic

  shipyardDom

  constructor() {
    if (new.target === Board) {
      throw new Error('Cannot instantiate an abstract class.')
    }
    this.boardLogic = new BoardLogic()
  }

  get sideLength() {
    return this.boardLogic.sideLength
  }

  startGame() {
    this.shipyardDom.disableDragging()
  }

  isAvailableToHit([x, y]) {
    return this.boardLogic.isAvailableToHit([x, y])
  }

  isAllShipsSunk() {
    return this.boardLogic.isAllShipsSunk()
  }

  receiveAttack([x, y]) {
    const { isHit, isSunk, shipId } = this.boardLogic.receiveAttack([x, y])
    if (isHit) {
      this.boardDom.markHit([x, y])
      if (isSunk) {
        const isVertical = this.shipyardDom.markSunk(shipId)
        const shipLen = Number.parseInt(shipId, 10)
        const affectedCells = this.boardLogic.markSurroundingMiss(
          [x, y],
          shipLen,
          isVertical
        )
        this.boardDom.markCellsMissed(affectedCells)
      }
    } else {
      this.boardDom.markMiss([x, y])
    }
    return isHit
  }

  enable() {
    this.boardDom.enable()
  }

  disable() {
    this.boardDom.disable()
  }
}
