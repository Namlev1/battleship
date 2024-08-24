import BoardDom from '../dom/boardDom'
import ShipyardDom from '../dom/shipyardDom'
import BoardLogic from '../logic/boardLogic'
import { getDraggedShipLength } from '../dom/utils'

export default class Board {
  boardDom

  #boardLogic

  shipyardDom

  constructor(boardName, onAllShipsPlaced, onAttackReceive) {
    this.#boardLogic = new BoardLogic()
    this.boardDom = new BoardDom(
      boardName,
      this.enterCellEventListener.bind(this),
      this.#boardLogic.sideLength,
      onAttackReceive
    )
    this.shipyardDom = new ShipyardDom(this.placeShipIfValid.bind(this))
    this.onAllShipsPlaced = onAllShipsPlaced
  }

  get sideLength() {
    return this.#boardLogic.sideLength
  }

  placeRandomly() {
    this.#boardLogic.placeRandomly()
  }

  isAvailableToHit([x, y]) {
    return this.#boardLogic.isAvailableToHit([x, y])
  }

  clearCellsColor() {
    this.boardDom.clearCellsColor()
    this.#boardLogic.clearNotShipCells()
  }

  enterCellEventListener(e) {
    const shipLen = getDraggedShipLength()
    const x = Number(e.target.dataset.x)
    const y = Number(e.target.dataset.y)

    if (!this.#boardLogic.willShipFitHorizontally(shipLen, x)) {
      this.boardDom.markCellsToTheBorderAsInvalid(x, y)
    } else if (!this.#boardLogic.isPlaceAvailableHorizontally(shipLen, x, y)) {
      this.boardDom.markShipCellsAsInvalid(x, y, shipLen)
    } else {
      this.boardDom.markShipCellsAsValid(shipLen, x, y)
    }
  }

  placeShipIfValid(shipDom, cell) {
    try {
      const x = Number(cell.dataset.x)
      const y = Number(cell.dataset.y)
      const shipId = shipDom.firstChild.dataset.shipId.split(' ')[0]

      const affectedPositions = this.#boardLogic.place([x, y], shipId)
      this.boardDom.markLocked(affectedPositions)
      this.boardDom.placeShip(cell, shipDom)
      if (this.#boardLogic.isAllShipsPlaced()) {
        this.shipyardDom.showPlayButton(this.onAllShipsPlaced)
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  isAllShipsPlaced() {
    return this.#boardLogic.isAllShipsPlaced()
  }

  showPlayButton() {
    this.shipyardDom.showPlayButton()
  }

  receiveAttack([x, y]) {
    const isHit = this.#boardLogic.receiveAttack([x, y])
    if (isHit) {
      this.boardDom.markHit([x, y])
    } else {
      this.boardDom.markMiss([x, y])
    }
    return isHit
  }

  hidePlayButton() {
    this.shipyardDom.hidePlayButton()
  }

  enable() {
    this.boardDom.enable()
  }

  disable() {
    this.boardDom.disable()
  }
}
