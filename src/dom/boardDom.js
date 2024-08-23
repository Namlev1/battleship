import { getDraggedShipLength } from './utils'

export default class BoardDom {
  #board

  sideLength

  enterListener

  constructor(className, enterListener, sideLength) {
    this.#board = document.createElement('div')
    this.sideLength = sideLength
    this.enterListener = enterListener

    this.#board.classList.add('board')
    const emptyCell = document.createElement('div')
    this.#board.appendChild(emptyCell)
    this.#addCells(this.#board, this.sideLength)
  }

  clearCellsColor() {
    const cells = this.#board.querySelectorAll('.cell')
    cells.forEach(cell => {
      cell.classList.remove('locked')
    })
  }

  markShipCellsAsInvalid(x, y, shipLen) {
    const start = x
    const end = x + shipLen
    for (let i = start; i < end; i++) {
      this.#getCell([i, y]).classList.add('invalid')
    }
  }

  // eslint-disable-next-line class-methods-use-this
  placeShip(cell, shipDom) {
    const rect = cell.getBoundingClientRect()
    const x = Math.floor(rect.left) + 8
    const y = Math.floor(rect.top) + 6

    shipDom.classList.add('locked')
    // eslint-disable-next-line no-param-reassign
    shipDom.style.top = `${y}px`
    // eslint-disable-next-line no-param-reassign
    shipDom.style.left = `${x}px`
  }

  markShipCellsAsValid(shipLen, x, y) {
    for (let i = 0; i < shipLen; i++) {
      this.#getCell([x + i, y]).classList.add('dragover')
    }
  }

  getDomElement() {
    return this.#board
  }

  markCellsToTheBorderAsInvalid(x, y) {
    for (let i = x; i < this.sideLength; i++) {
      this.#getCell([i, y]).classList.add('invalid')
    }
  }

  #addShipCell(boardDom, x, y) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('dragenter', this.enterListener)
    cell.addEventListener('dragleave', this.leaveCellEventListener)
    cell.dataset.x = x
    cell.dataset.y = y
    boardDom.appendChild(cell)
  }

  // eslint-disable-next-line class-methods-use-this
  #addRowCell(i, boardEnd) {
    const rowNum = document.createElement('div')
    rowNum.textContent = String(i)
    boardEnd.appendChild(rowNum)
  }

  // eslint-disable-next-line class-methods-use-this
  #addColumnCell(A, i, boardDom) {
    const colName = document.createElement('div')
    colName.textContent = String.fromCharCode(A + i)
    boardDom.appendChild(colName)
  }

  #addCells(boardDom, sideLength) {
    const A = 65
    for (let i = 0; i < sideLength; i++) {
      this.#addColumnCell(A, i, boardDom)
    }
    for (let i = 0; i < sideLength; i++) {
      this.#addRowCell(i + 1, boardDom)
      for (let j = 0; j < sideLength; j++) {
        this.#addShipCell(boardDom, j, i)
      }
    }
  }

  markHit([x, y]) {
    const cell = this.#getCell([x, y])
    cell.classList.add('hit')
  }

  markMiss([x, y]) {
    const cell = this.#getCell([x, y])
    cell.classList.add('miss')
  }

  #getCell([x, y]) {
    return this.#board.querySelector(`[data-x="${x}"][data-y="${y}"]`)
  }

  // eslint-disable-next-line class-methods-use-this
  leaveCellEventListener(e) {
    let cell = e.target
    const length = getDraggedShipLength()
    let i = 0
    while (cell && i < length) {
      cell.classList.remove('dragover')
      cell.classList.remove('invalid')
      cell = cell.nextElementSibling
      i++
    }
  }

  markLocked(coords) {
    coords.forEach(position => {
      this.#getCell(position).classList.add('locked')
    })
  }
}
