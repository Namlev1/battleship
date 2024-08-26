import ShipyardDom from './shipyardDom'

export default class EnemyShipyardDom extends ShipyardDom {
  constructor(dropListener, relocateShip) {
    super(() => {}, relocateShip)
    this.shipyard = this.createShipyard('GRAVEYARD', 'enemy')
  }
}
