import ShipyardDom from './shipyardDom'

export default class EnemyShipyardDom extends ShipyardDom {
  constructor(dropListener) {
    super(() => {})
    this.shipyard = this.createShipyard('GRAVEYARD', 'enemy')
  }
}
