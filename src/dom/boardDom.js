import { getDraggedShipLength } from './utils'
import Gameboard from '../game/gameboard'

export default class BoardDom {
  #boardDom
  #gameboard

  constructor(className) {
    this.#gameboard = new Gameboard()

    this.#boardDom = document.createElement('div')
    this.#boardDom.classList.add('board')
    this.#boardDom.classList.add(className)
    const emptyCell = document.createElement('div')
    this.#boardDom.appendChild(emptyCell)
    this.#addCells(this.#boardDom, this.#gameboard.sideLength)
  }

  static #markShipCellsAsValid(shipLen, x, y) {
    for (let i = 0; i < shipLen; i++) {
      document
        .querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
        .classList.add('dragover')
    }
  }

  static #markShipCellsAsInvalid(x, y, shipLen) {
    const start = x
    const end = x + shipLen
    for (let i = start; i < end; i++) {
      document
        .querySelector(`[data-x="${i}"][data-y="${y}"]`)
        .classList.add('invalid')
    }
  }

  static #placeShipVisually(cell, shipDom) {
    const rect = cell.getBoundingClientRect()
    const x = Math.floor(rect.left) + 8
    const y = Math.floor(rect.top) + 6

    shipDom.classList.add('locked')
    shipDom.style.top = `${y}px`
    shipDom.style.left = `${x}px`
  }

  getDomElement() {
    return this.#boardDom
  }

  #markCellsToTheBorderAsInvalid(x, y) {
    for (let i = x; i < this.#gameboard.sideLength; i++) {
      const cell = document.querySelector(`[data-x="${i}"][data-y="${y}"]`)
      cell.classList.add('invalid')
    }
  }

  #enterCellEventListener(e) {
    const shipLen = getDraggedShipLength()
    const x = Number(e.target.dataset.x)
    const y = Number(e.target.dataset.y)

    if (!this.#gameboard.willShipFitHorizontally(shipLen, x)) {
      this.#markCellsToTheBorderAsInvalid(x, y)
    } else if (!this.#gameboard.isPlaceAvailableHorizontally(shipLen, x, y)) {
      BoardDom.#markShipCellsAsInvalid(x, y, shipLen)
    } else {
      BoardDom.#markShipCellsAsValid(shipLen, x, y)
    }
  }

  #leaveCellEventListener(e) {
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

  #addShipCell(boardDom, x, y) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('dragenter', this.#enterCellEventListener.bind(this))
    cell.addEventListener('dragleave', this.#leaveCellEventListener.bind(this))
    cell.dataset.x = x
    cell.dataset.y = y
    boardDom.appendChild(cell)
  }

  #addRowCell(i, boardEnd) {
    const rowNum = document.createElement('div')
    rowNum.textContent = String(i)
    boardEnd.appendChild(rowNum)
  }

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

  placeShipIfValid(shipDom, cell) {
    try {
      const x = Number(cell.dataset.x)
      const y = Number(cell.dataset.y)
      const shipLen = Number.parseInt(shipDom.firstChild.dataset.shipId, 10)

      const affectedPositions = this.#gameboard.place([x, y], shipLen)
      affectedPositions.forEach(position => {
        const [x, y] = position
        const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
        cell.classList.add('locked')
      })
    } catch (e) {
      console.log(e.trace)
      return
    }
    BoardDom.#placeShipVisually(cell, shipDom)
  }
}
