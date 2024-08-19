function addShipCell(board) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
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
