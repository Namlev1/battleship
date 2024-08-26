class ShipyardDom {
  shipyard

  constructor(dropListener, relocateShip, changeShipOrientation) {
    if (new.target === ShipyardDom) {
      throw new Error('Cannot instantiate an abstract class.')
    }
    this.dropListener = dropListener
    this.relocateShip = relocateShip
    this.changeShipOrientation = changeShipOrientation
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

  #resetShip(shipWrap) {
    shipWrap.classList.remove('locked')
    shipWrap.classList.remove('vertical')
    shipWrap.removeAttribute('style')
    shipWrap.removeAttribute('data-x')
    shipWrap.removeAttribute('data-y')
  }

  #createShip(className, shipId, shipLen) {
    const shipWrap = document.createElement('div')
    shipWrap.classList.add('ship-wrap', className)
    shipWrap.draggable = true
    shipWrap.addEventListener('dragstart', () => {
      if (shipWrap.classList.contains('locked')) {
        const { x, y } = shipWrap.dataset
        const isVertical = shipWrap.classList.contains('vertical')
        this.relocateShip([x, y], shipLen, isVertical)
      }
      shipWrap.classList.add('dragging')
    })
    shipWrap.addEventListener('dragend', () => {
      const cell = document.querySelector('.cell:hover')
      if (cell) {
        this.dropListener(shipWrap, cell)
      } else {
        this.#resetShip(shipWrap)
      }
      shipWrap.classList.remove('dragging')
    })
    shipWrap.addEventListener('click', () => {
      if (shipWrap.classList.contains('locked')) {
        this.changeShipOrientation(shipWrap)
      }
    })

    const shipField = document.createElement('div')
    shipField.classList.add('ship')
    shipField.dataset.shipId = shipId
    this.#addShipDots(shipField, shipLen)
    shipWrap.appendChild(shipField)
    return shipWrap
  }

  #createShips(className) {
    const fiveShip = this.#createShip('five', `5 ${className}`, 5)
    const fourShip = this.#createShip('four', `4 ${className}`, 4)
    const threeShipA = this.#createShip('three-a', `3a ${className}`, 3)
    const threeShipB = this.#createShip('three-b', `3b ${className}`, 3)
    const twoShip = this.#createShip('two', `2 ${className}`, 2)

    const shipsDiv = document.createElement('div')
    shipsDiv.classList.add('ships')
    shipsDiv.appendChild(fourShip)
    shipsDiv.appendChild(threeShipA)
    shipsDiv.appendChild(twoShip)
    shipsDiv.appendChild(fiveShip)
    shipsDiv.appendChild(threeShipB)

    return shipsDiv
  }

  createShipyard(name, id) {
    const shipyard = document.createElement('div')
    shipyard.classList.add('yard')

    const header = document.createElement('p')
    header.classList.add('name')
    header.textContent = name

    const ships = this.#createShips(id)

    shipyard.appendChild(header)
    shipyard.append(ships)
    return shipyard
  }

  getDomElement() {
    return this.shipyard
  }

  markSunk(shipId) {
    const shipDom = this.shipyard.querySelector(
      `[data-ship-id*="${shipId}"]`
    ).parentElement
    shipDom.classList.add('sunk')
  }

  toggleVertical(shipDom) {
    shipDom.classList.toggle('vertical')
  }
}

export default ShipyardDom
