class ShipyardDom {
  #shipyard

  #dropListener

  constructor(dropListener) {
    this.#dropListener = dropListener
    this.#shipyard = this.#createShipyard()
  }

  // eslint-disable-next-line class-methods-use-this
  #addShipDots(ship, count) {
    while (count) {
      const dot = document.createElement('div')
      dot.classList.add('ship-dot')
      ship.appendChild(dot)
      count--
    }
  }

  #createShip(className, shipId, dotsNum) {
    const shipWrap = document.createElement('div')
    shipWrap.classList.add('ship-wrap', className)
    shipWrap.draggable = true
    shipWrap.addEventListener('dragstart', () => {
      shipWrap.classList.add('dragging')
    })
    shipWrap.addEventListener('dragend', () => {
      const cell = document.querySelector('.cell:hover')
      this.#dropListener(shipWrap, cell)
      shipWrap.classList.remove('dragging')
    })

    const shipField = document.createElement('div')
    shipField.classList.add('ship')
    shipField.dataset.shipId = shipId
    this.#addShipDots(shipField, dotsNum)
    shipWrap.appendChild(shipField)
    return shipWrap
  }

  #createPlayerShips() {
    const fiveShip = this.#createShip('five', '5 player', 5)
    const fourShip = this.#createShip('four', '4 player', 4)
    const threeShipA = this.#createShip('three-a', '3a player', 3)
    const threeShipB = this.#createShip('three-b', '3b player', 3)
    const twoShip = this.#createShip('two', '2 player', 2)

    const shipsDiv = document.createElement('div')
    shipsDiv.classList.add('ships')
    shipsDiv.appendChild(fourShip)
    shipsDiv.appendChild(threeShipA)
    shipsDiv.appendChild(twoShip)
    shipsDiv.appendChild(fiveShip)
    shipsDiv.appendChild(threeShipB)

    return shipsDiv
  }

  #createShipyard() {
    const shipyard = document.createElement('div')
    shipyard.classList.add('yard')

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = 'SHIPYARD'

    const ships = this.#createPlayerShips()

    shipyard.appendChild(name)
    shipyard.append(ships)
    return shipyard
  }

  getDomElement() {
    return this.#shipyard
  }

  showPlayButton(callback) {
    const button = document.createElement('button')
    button.textContent = 'PLAY'
    button.addEventListener('click', callback)
    this.#shipyard.appendChild(button)
  }
}

export default ShipyardDom
