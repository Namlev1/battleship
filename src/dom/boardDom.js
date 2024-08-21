import {
  getDraggedShipLength,
  isCellInAvailable,
  isCellOutOfBound
} from './utils'

function enterCellEventListener(e) {
  const cells = []
  const length = getDraggedShipLength()

  let tmp = e.target
  for (let i = 0; i < length; i++) {
    if (isCellOutOfBound(tmp)) {
      cells.forEach(cell => cell.classList.add('invalid'))
      return
    }

    cells.push(tmp)
    tmp = tmp.nextElementSibling
  }
  cells.forEach(cell => {
    cell.classList.add('dragover')
    if (isCellInAvailable(cell)) cell.classList.add('invalid')
  })
}

function leaveCellEventListener(e) {
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

function addShipCell(board) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.addEventListener('dragenter', enterCellEventListener)
  cell.addEventListener('dragleave', leaveCellEventListener)
  board.appendChild(cell)
}

function addRowCell(i, board) {
  const rowNum = document.createElement('div')
  rowNum.textContent = String(i)
  board.appendChild(rowNum)
}

function addColumnCell(A, i, board) {
  const colName = document.createElement('div')
  colName.textContent = String.fromCharCode(A + i)
  board.appendChild(colName)
}

function addCells(board) {
  const A = 65
  for (let i = 0; i < 10; i++) {
    addColumnCell(A, i, board)
  }
  for (let i = 1; i <= 10; i++) {
    addRowCell(i, board)
    for (let j = 0; j < 10; j++) {
      addShipCell(board)
    }
  }
}

const createBoard = className => {
  const board = document.createElement('div')
  board.classList.add('board')
  board.classList.add(className)
  const emptyCell = document.createElement('div')
  board.appendChild(emptyCell)
  addCells(board)
  return board
}

export default createBoard
