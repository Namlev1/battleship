import BoardDom from './boardDom'

export default class EnemyBoardDom extends BoardDom {
  constructor(className, onAttackReceive, sideLen) {
    super(className, () => {}, sideLen, onAttackReceive)
  }
}
