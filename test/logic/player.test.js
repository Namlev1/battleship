import Player from '../../src/logic/player'
import BoardLogic from '../../src/logic/boardLogic'

let player
let board

beforeEach(() => {
  player = new Player()
  board = new BoardLogic()
})

test('Should send receiveAttack() to owned gameboard', () => {
  board.receiveAttack = jest.fn()
  player.board = board
  player.receiveAttack([0, 0])
  expect(board.receiveAttack).toHaveBeenCalled()
})
