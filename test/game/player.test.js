import Player from '../../src/game/player'
import Gameboard from '../../src/game/gameboard'

let player
let board

beforeEach(() => {
  player = new Player()
  board = new Gameboard()
})

test('Should send receiveAttack() to owned gameboard', () => {
  board.receiveAttack = jest.fn()
  player.board = board
  player.receiveAttack([0, 0])
  expect(board.receiveAttack).toHaveBeenCalled()
})
