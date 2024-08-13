export default class Player {
  board;
  receiveAttack(coords){
    return this.board.receiveAttack(coords);
  }
}