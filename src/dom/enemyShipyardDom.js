import ShipyardDom from './shipyardDom'

export default class EnemyShipyardDom extends ShipyardDom {
  constructor(dropListener, relocateShip, changeShipOrientation) {
    super(dropListener, relocateShip, changeShipOrientation)
    this.shipyard = this.createShipyard('GRAVEYARD', 'enemy')
  }

  markShipsAsVertical(ids) {
    if (ids) {
      ids.forEach(id => {
        const ship = this.shipyard.querySelector(
          `[data-ship-id*="${id}"]`
        ).parentElement
        ship.classList.add('vertical')
      })
    }
  }
}
