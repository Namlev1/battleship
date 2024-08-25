import ShipyardDom from './shipyardDom'

export default class PlayerShipyardDom extends ShipyardDom {
  constructor(dropListener) {
    super(dropListener)
    this.shipyard = this.createShipyard('SHIPYARD', 'player')
  }

  showPlayButton(callback) {
    const button = document.createElement('button')
    button.textContent = 'PLAY'
    button.addEventListener('click', callback)
    this.shipyard.appendChild(button)
  }

  hidePlayButton() {
    this.shipyard.querySelector('button').remove()
  }
}
