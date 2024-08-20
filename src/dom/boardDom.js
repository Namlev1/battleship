function getDraggedShipLength() {
  const ship = document.querySelector('.dragging').firstChild
  const length = Number.parseInt(ship.dataset.shipId, 10)
  return length
}

function isCellInvalid(cell) {
  const board = cell.parentElement
  const childrenArr = Array.from(board.children)
  const index = childrenArr.indexOf(cell)
  return index % 11 === 0
}

function enterCellEventListener(e) {
  e.target.classList.add('dragover')
  const length = getDraggedShipLength()
  let tmp = e.target
  for (let i = 1; i < length; i++) {
    if (isCellInvalid(tmp)) break
    tmp.nextElementSibling.classList.add('dragover')
    tmp = tmp.nextElementSibling
  }
}

function leaveCellEventListener(e) {
  e.target.classList.remove('dragover')
  const length = getDraggedShipLength()
  let tmp = e.target
  for (let i = 1; i < length; i++) {
    if (isCellInvalid(tmp)) break
    tmp.nextElementSibling.classList.remove('dragover')
    tmp = tmp.nextElementSibling
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
