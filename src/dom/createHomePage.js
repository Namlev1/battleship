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

function addShipDots(ship, count) {
  while (count) {
    const dot = document.createElement('div')
    dot.classList.add('ship-dot')
    ship.appendChild(dot)
    count--
  }
}

function createPlayerShips() {
  const fiveField = document.createElement('div')
  fiveField.classList.add('ship')
  fiveField.classList.add('five-field')
  fiveField.dataset.shipId = '5 player'
  fiveField.draggable = true
  addShipDots(fiveField, 5)

  const fourField = document.createElement('div')
  fourField.classList.add('ship')
  fourField.classList.add('four-field')
  fourField.dataset.shipId = '4 player'
  fourField.draggable = true
  addShipDots(fourField, 4)

  const threeFieldA = document.createElement('div')
  threeFieldA.classList.add('ship')
  threeFieldA.classList.add('three-field-a')
  threeFieldA.dataset.shipId = '3a player'
  threeFieldA.draggable = true

  const threeFieldB = document.createElement('div')
  threeFieldB.classList.add('ship')
  threeFieldB.classList.add('three-field-b')
  threeFieldB.dataset.shipId = '3b player'
  threeFieldB.draggable = true

  const twoField = document.createElement('div')
  twoField.classList.add('ship')
  twoField.classList.add('two-field')
  twoField.dataset.shipId = '2 player'
  twoField.draggable = true

  // return [fiveField, fourField, threeFieldA, threeFieldB, twoField]
  return [fourField]
}

function createShipyard() {
  const shipyard = document.createElement('div')
  shipyard.classList.add('yard')

  const name = document.createElement('p')
  name.classList.add('name')
  name.textContent = 'SHIPYARD'

  const ships = createPlayerShips()

  shipyard.appendChild(name)
  shipyard.append(...ships)
  return shipyard
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

  const shipyard = createShipyard()

  playerDiv.appendChild(fleetBanner)
  playerDiv.appendChild(playerBoard)
  playerDiv.appendChild(shipyard)
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
