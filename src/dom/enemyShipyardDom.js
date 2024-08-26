import ShipyardDom from './shipyardDom'

export default class EnemyShipyardDom extends ShipyardDom {
  constructor(dropListener, relocateShip, changeShipOrientation) {
    super(dropListener, relocateShip, changeShipOrientation)
    this.shipyard = this.createShipyard('GRAVEYARD', 'enemy')
  }
}
