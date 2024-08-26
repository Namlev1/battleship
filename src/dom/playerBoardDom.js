import BoardDom from './boardDom'

export default class PlayerBoardDom extends BoardDom {
  constructor(className, dropShipIntoCellEventListener, sideLen) {
    super(className, dropShipIntoCellEventListener, sideLen, () => {})
  }

  clearAllCells() {
    const cells = this.board.querySelectorAll('.cell')
    cells.forEach(cell => {
      cell.classList.remove('locked')
    })
  }

  clearCells(coords) {
    coords.forEach(position => {
      this.getCell(position).classList.remove('locked')
    })
  }

  placeShipByCoords(coords, shipDom) {
    this.placeShip(this.getCell(coords), shipDom)
  }

  // eslint-disable-next-line class-methods-use-this
  placeShip(cell, shipDom) {
    const rect = cell.getBoundingClientRect()
    const x = Math.floor(rect.left) + 6
    const y = Math.floor(rect.top) + 6

    shipDom.classList.add('locked')
    // eslint-disable-next-line no-param-reassign
    shipDom.style.top = `${y}px`
    // eslint-disable-next-line no-param-reassign
    shipDom.style.left = `${x}px`
    // eslint-disable-next-line no-param-reassign
    shipDom.dataset.x = cell.dataset.x
    // eslint-disable-next-line no-param-reassign
    shipDom.dataset.y = cell.dataset.y
  }

  markShipCellsAsInvalid(x, y, shipLen) {
    const start = x
    const end = x + shipLen
    for (let i = start; i < end; i++) {
      this.getCell([i, y]).classList.add('invalid')
    }
  }

  markCellsToTheBorderAsInvalid(x, y) {
    for (let i = x; i < this.sideLength; i++) {
      this.getCell([i, y]).classList.add('invalid')
    }
  }

  markShipCellsAsValid(shipLen, x, y) {
    for (let i = 0; i < shipLen; i++) {
      this.getCell([x + i, y]).classList.add('dragover')
    }
  }
}
