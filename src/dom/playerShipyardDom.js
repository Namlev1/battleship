import ShipyardDom from './shipyardDom'

export default class PlayerShipyardDom extends ShipyardDom {
  playButton

  constructor(dropListener, relocateShip, changeShipOrientation) {
    super(dropListener, relocateShip, changeShipOrientation)
    this.shipyard = this.createShipyard('SHIPYARD', 'player')
  }

  showPlayButton(callback) {
    if (!this.playButton) {
      this.playButton = document.createElement('button')
      this.playButton.textContent = 'PLAY'
      this.playButton.addEventListener('click', callback)
      this.shipyard.appendChild(this.playButton)
    }
  }

  hidePlayButton() {
    if (this.playButton) {
      this.playButton.remove()
      this.playButton = undefined
    }
  }
}
