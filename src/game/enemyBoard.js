import Board from './board'
import EnemyBoardDom from '../dom/enemyBoardDom'
import EnemyShipyardDom from '../dom/enemyShipyardDom'

export default class EnemyBoard extends Board {
  constructor(onAttackReceive) {
    super()
    this.boardDom = new EnemyBoardDom(
      'enemy',
      onAttackReceive,
      this.boardLogic.sideLength
    )
    this.shipyardDom = new EnemyShipyardDom()
  }

  placeRandomly() {
    this.boardLogic.placeRandomly()
  }
}
