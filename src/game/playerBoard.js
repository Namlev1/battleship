import Board from './board'
import PlayerBoardDom from '../dom/playerBoardDom'
import PlayerShipyardDom from '../dom/playerShipyardDom'
import { getDraggedShipLength } from '../dom/utils'

export default class PlayerBoard extends Board {
  constructor(onAllShipsPlaced) {
    super(onAllShipsPlaced)
    this.boardName = 'player'
    this.boardDom = new PlayerBoardDom(
      this.boardName,
      this.dragShipIntoCellEventListener.bind(this),
      this.boardLogic.sideLength
    )
    this.shipyardDom = new PlayerShipyardDom(
      this.placeShipIfValid.bind(this),
      this.relocateShip.bind(this)
    )
    this.onAllShipsPlaced = onAllShipsPlaced
  }

  clearCellsColor() {
    this.boardDom.clearAllCells()
    this.boardLogic.clearNotShipCells()
  }

  dragShipIntoCellEventListener(e) {
    const shipLen = getDraggedShipLength()
    const x = Number(e.target.dataset.x)
    const y = Number(e.target.dataset.y)

    if (!this.boardLogic.willShipFitHorizontally(shipLen, x)) {
      this.boardDom.markCellsToTheBorderAsInvalid(x, y)
    } else if (!this.boardLogic.isPlaceAvailableHorizontally(shipLen, x, y)) {
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

      const affectedPositions = this.boardLogic.place([x, y], shipId)
      this.boardDom.markLocked(affectedPositions)
      this.boardDom.placeShip(cell, shipDom)
      if (this.boardLogic.isAllShipsPlaced()) {
        this.shipyardDom.showPlayButton(this.onAllShipsPlaced)
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  relocateShip([x, y], shipLen, vertical) {
    const affectedCells = this.boardLogic.removeShip(
      [Number(x), Number(y)],
      shipLen,
      vertical
    )
    this.boardDom.clearCells(affectedCells)
  }

  showPlayButton() {
    this.shipyardDom.showPlayButton()
  }

  hidePlayButton() {
    this.shipyardDom.hidePlayButton()
  }

  isAllShipsPlaced() {
    return this.boardLogic.isAllShipsPlaced()
  }
}
