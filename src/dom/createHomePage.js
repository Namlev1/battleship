import GithubIcon from '../../assets/img/github.png'

const addHeader = () => {
  const header = document.querySelector('#header')

  const battleship = document.createElement('p')
  battleship.textContent = 'BATTLESHIP'
  battleship.classList.add('header-text')

  const github = document.createElement('div')
  github.id = 'github'

  const createdBy = document.createElement('p')
  createdBy.textContent = 'Created by Namlev1 @ 2024'

  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/Namlev1'
  githubLink.target = '_blank'
  githubLink.rel = 'noopener noreferrer'

  const githubIcon = document.createElement('img')
  githubIcon.alt = 'Github Icon'
  githubIcon.src = GithubIcon

  githubLink.appendChild(githubIcon)
  github.appendChild(createdBy)
  github.appendChild(githubLink)
  header.appendChild(battleship)
  header.appendChild(github)
}

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

const addMain = () => {
  const main = document.querySelector('#main')
  const gameGrid = document.createElement('div')
  gameGrid.id = 'game-grid'

  const playerDiv = document.createElement('div')
  playerDiv.classList.add('game-panel')
  playerDiv.classList.add('player')
  const enemyDiv = document.createElement('div')
  enemyDiv.classList.add('game-panel')
  enemyDiv.classList.add('enemy')

  const fleetBanner = document.createElement('button')
  fleetBanner.disabled = true
  fleetBanner.textContent = 'YOUR FLEET'

  const enemyBanner = document.createElement('button')
  enemyBanner.disabled = true
  enemyBanner.textContent = 'OPPONENT'

  const playerBoard = createBoard('player-board')
  const enemyBoard = createBoard('enemy-board')

  playerDiv.appendChild(fleetBanner)
  playerDiv.appendChild(playerBoard)
  enemyDiv.appendChild(enemyBanner)
  enemyDiv.appendChild(enemyBoard)
  gameGrid.appendChild(playerDiv)
  gameGrid.appendChild(enemyDiv)
  main.appendChild(gameGrid)
}

export default () => {
  addHeader()
  addMain()
}
