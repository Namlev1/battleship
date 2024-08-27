import Board from './board'
import PlayerBoardDom from '../dom/playerBoardDom'
import PlayerShipyardDom from '../dom/playerShipyardDom'
import { getDraggedShipDom, getDraggedShipLength } from '../dom/utils'

export default class PlayerBoard extends Board {
  constructor(onAllShipsPlaced) {
    super(onAllShipsPlaced)
    this.isShowingPlayButton = false
    this.boardName = 'player'
    this.boardDom = new PlayerBoardDom(
      this.boardName,
      this.dragShipIntoCellEventListener.bind(this),
      this.boardLogic.sideLength
    )
    this.shipyardDom = new PlayerShipyardDom(
      this.placeShipIfValid.bind(this),
      this.relocateShip.bind(this),
      this.changeShipOrientation.bind(this)
    )
    this.onAllShipsPlaced = onAllShipsPlaced
  }

  clearCellsColor() {
    this.boardDom.clearAllCells()
    this.boardLogic.clearNotShipCells()
  }

  dragShipIntoCellEventListener(e) {
    const shipLen = getDraggedShipLength()
    const shipDom = getDraggedShipDom()
    const x = Number(e.target.dataset.x)
    const y = Number(e.target.dataset.y)
    const isVertical = shipDom.classList.contains('vertical')

    if (!isVertical) {
      if (!this.boardLogic.willShipFitHorizontally(shipLen, x)) {
        this.boardDom.markCellsToTheRightBorderAsInvalid(x, y)
      } else if (!this.boardLogic.isPlaceAvailableHorizontally(shipLen, x, y)) {
        this.boardDom.markShipCellsAsInvalidHorizontally(x, y, shipLen)
      } else {
        this.boardDom.markShipCellsAsValidHorizontally(shipLen, x, y)
      }
    } else {
      if (!this.boardLogic.willShipFitVertically(shipLen, y)) {
        this.boardDom.markCellsToTheBottomBorderAsInvalid(x, y)
      } else if (!this.boardLogic.isPlaceAvailableVertically(shipLen, x, y)) {
        this.boardDom.markShipCellsAsInvalidVertically(x, y, shipLen)
      } else {
        this.boardDom.markShipCellsAsValidVertically(shipLen, x, y)
      }
    }
  }

  placeShipIfValid(shipDom, cell) {
    const cellX = Number(cell.dataset.x)
    const cellY = Number(cell.dataset.y)
    const shipX = Number(shipDom.dataset.x)
    const shipY = Number(shipDom.dataset.y)
    const shipId = shipDom.firstChild.dataset.shipId.split(' ')[0]
    const isVertical = shipDom.classList.contains('vertical')

    let affectedPositions
    try {
      affectedPositions = this.boardLogic.place(
        [cellX, cellY],
        shipId,
        isVertical
      )
      this.boardDom.placeShip(cell, shipDom)
    } catch (e) {
      if (shipX && shipY) {
        affectedPositions = this.boardLogic.place(
          [shipX, shipY],
          shipId,
          isVertical
        )
        this.boardDom.placeShipByCoords([shipX, shipY], shipDom)
      }
    }
    this.boardDom.markLocked(affectedPositions)
    if (this.boardLogic.isAllShipsPlaced()) {
      this.shipyardDom.showPlayButton(this.onAllShipsPlaced)
    }
  }

  relocateShip([x, y], shipLen, vertical) {
    const affectedCells = this.boardLogic.removeShip(
      [Number(x), Number(y)],
      shipLen,
      vertical
    )
    this.boardDom.clearCells(affectedCells)
    if (!this.boardLogic.isAllShipsPlaced()) {
      this.shipyardDom.hidePlayButton()
    }
  }

  changeShipOrientation(shipDom) {
    if (this.isGameStarted) {
      return
    }
    const x = Number(shipDom.dataset.x)
    const y = Number(shipDom.dataset.y)
    const shipId = shipDom.firstChild.dataset.shipId.split(' ')[0]
    const shipLen = Number.parseInt(shipId, 10)
    const isVertical = shipDom.classList.contains('vertical')

    const affectedCells = this.boardLogic.removeShip(
      [Number(x), Number(y)],
      shipLen,
      isVertical
    )
    this.boardDom.clearCells(affectedCells)

    let affectedPositions
    try {
      affectedPositions = this.boardLogic.place([x, y], shipId, !isVertical)
      this.shipyardDom.toggleVertical(shipDom)
    } catch (e) {
      affectedPositions = this.boardLogic.place([x, y], shipId, isVertical)
    }

    this.boardDom.markLocked(affectedPositions)
    this.boardDom.placeShipByCoords([x, y], shipDom)
    if (this.boardLogic.isAllShipsPlaced()) {
      this.shipyardDom.showPlayButton(this.onAllShipsPlaced)
    }
  }

  hidePlayButton() {
    this.shipyardDom.hidePlayButton()
  }

  isAllShipsPlaced() {
    return this.boardLogic.isAllShipsPlaced()
  }
}
