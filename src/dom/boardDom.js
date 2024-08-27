export default class BoardDom {
  board

  sideLength

  enterListener

  constructor(className, enterListener, sideLength, onAttackReceive) {
    if (new.target === BoardDom) {
      throw new Error('Cannot instantiate an abstract class.')
    }

    this.board = document.createElement('div')
    this.sideLength = sideLength
    this.enterListener = enterListener
    this.onAttackReceive = onAttackReceive

    this.board.classList.add('board')
    const emptyCell = document.createElement('div')
    this.board.appendChild(emptyCell)
    this.#addCells(this.board, this.sideLength)
  }

  getDomElement() {
    return this.board
  }

  #addShipCell(boardDom, x, y) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('dragenter', this.enterListener)
    cell.addEventListener('dragleave', this.leaveCellEventListener)
    cell.addEventListener('mouseover', () => {
      if (this.enabled) cell.classList.add('hover')
    })
    cell.addEventListener('mouseout', () => {
      cell.classList.remove('hover')
    })
    cell.addEventListener('click', () => {
      if (this.enabled) {
        this.onAttackReceive([x, y])
      }
    })
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
    const cell = this.getCell([x, y])
    cell.classList.add('hit')
  }

  markMiss([x, y]) {
    const cell = this.getCell([x, y])
    cell.classList.add('miss')
  }

  getCell([x, y]) {
    return this.board.querySelector(`[data-x="${x}"][data-y="${y}"]`)
  }

  // eslint-disable-next-line class-methods-use-this
  leaveCellEventListener() {
    const cells = document.querySelectorAll(
      '.game-panel.player > .board > .cell'
    )
    cells.forEach(cell => {
      cell.classList.remove('dragover')
      cell.classList.remove('invalid')
    })
  }

  markLocked(coords) {
    coords.forEach(position => {
      this.getCell(position).classList.add('locked')
    })
  }

  enable() {
    this.enabled = true
  }

  disable() {
    this.enabled = false
  }
}
