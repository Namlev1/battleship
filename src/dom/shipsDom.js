import { isCellInAvailable, isCellOutOfBound } from './utils'

function addShipDots(ship, count) {
  while (count) {
    const dot = document.createElement('div')
    dot.classList.add('ship-dot')
    ship.appendChild(dot)
    count--
  }
}

function getSurroundingCells(ship, cell) {
  if (!cell) throw new Error('No cell is selected')

  const length = Number.parseInt(ship.firstChild.dataset.shipId, 10)
  const cells = []
  let tmp = cell
  for (let i = 0; i < length; i++) {
    if (isCellOutOfBound(tmp)) {
      throw new Error('Invalid cell')
    }
    if (isCellInAvailable(tmp)) {
      throw new Error('Locked cell')
    }
    cells.push(tmp)
    tmp = tmp.nextElementSibling
  }

  return cells
}

function placeShipIfValid(ship, cell) {
  try {
    const cells = getSurroundingCells(ship, cell)
    cells.forEach(shipCell => shipCell.classList.add('locked'))
  } catch (e) {
    console.log(e.message)
    return
  }

  const rect = cell.getBoundingClientRect()
  const x = Math.floor(rect.left) + 8
  const y = Math.floor(rect.top) + 6

  ship.classList.add('locked')
  ship.style.top = `${y}px`
  ship.style.left = `${x}px`
}

function createShip(className, shipId, dotsNum) {
  const shipWrap = document.createElement('div')
  shipWrap.classList.add('ship-wrap', className)
  shipWrap.draggable = true
  shipWrap.addEventListener('dragstart', () =>
    shipWrap.classList.add('dragging')
  )
  shipWrap.addEventListener('dragend', () => {
    const cell = document.querySelector('.cell:hover')
    placeShipIfValid(shipWrap, cell)
    shipWrap.classList.remove('dragging')
  })

  const shipField = document.createElement('div')
  shipField.classList.add('ship')
  shipField.dataset.shipId = shipId
  addShipDots(shipField, dotsNum)
  shipWrap.appendChild(shipField)
  return shipWrap
}

function createPlayerShips() {
  const fiveShip = createShip('five', '5 player', 5)
  const fourShip = createShip('four', '4 player', 4)
  const threeShipA = createShip('three-a', '3a player', 3)
  const threeShipB = createShip('three-b', '3b player', 3)
  const twoShip = createShip('two', '2 player', 2)

  const shipsDiv = document.createElement('div')
  shipsDiv.classList.add('ships')
  shipsDiv.appendChild(fourShip)
  shipsDiv.appendChild(threeShipA)
  shipsDiv.appendChild(twoShip)
  shipsDiv.appendChild(fiveShip)
  shipsDiv.appendChild(threeShipB)

  return shipsDiv
}

export default function createShipyard() {
  const shipyard = document.createElement('div')
  shipyard.classList.add('yard')

  const name = document.createElement('p')
  name.classList.add('name')
  name.textContent = 'SHIPYARD'

  const ships = createPlayerShips()

  shipyard.appendChild(name)
  shipyard.append(ships)
  return shipyard
}
