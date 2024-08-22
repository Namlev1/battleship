import Gameboard from '../../src/game/gameboard'
import Ship from '../../src/game/ship'

let gameBoard
let ship

beforeEach(() => {
  gameBoard = new Gameboard()
  ship = new Ship(2)
})

test('Place a ship horizontally', () => {
  gameBoard.place([0, 0], ship)
  expect(gameBoard.board[1][0]).toBe(ship)
})

test('Place a ship vertically', () => {
  gameBoard.place([0, 0], ship, true)
  expect(gameBoard.board[0][1]).toBe(ship)
})

test('Place out of bonds', () => {
  expect(() => gameBoard.place([10, 0], ship)).toThrow(
    'Ship placed out of board bounds'
  )
})

test('Place 2 overlapping ships', () => {
  gameBoard.place([0, 0], ship)
  const ship2 = new Ship(2)
  expect(() => {
    gameBoard.place([1, 0], ship2)
  }).toThrow('Ships overlap')
})

test('Hit a ship horizontally', () => {
  ship.hit = jest.fn()
  gameBoard.place([0, 0], ship)
  gameBoard.receiveAttack([1, 0])
  expect(ship.hit).toHaveBeenCalled()
})

test('Hit a ship vertically', () => {
  ship.hit = jest.fn()
  gameBoard.place([0, 0], ship, true)
  gameBoard.receiveAttack([0, 1])
  expect(ship.hit).toHaveBeenCalled()
})

test('Miss a ship', () => {
  ship.hit = jest.fn()
  gameBoard.place([0, 0], ship, true)
  gameBoard.receiveAttack([1, 1])
  expect(ship.hit).not.toHaveBeenCalled()
})

test('Shoot empty board', () => {
  gameBoard.receiveAttack([0, 0])
  gameBoard.receiveAttack([1, 0])
  gameBoard.receiveAttack([2, 0])
  expect(gameBoard.missCount).toBe(3)
})

test('Both missed and hit attacks count', () => {
  gameBoard.place([0, 0], ship)
  gameBoard.receiveAttack([0, 0])
  gameBoard.receiveAttack([1, 1])
  gameBoard.receiveAttack([2, 2])
  expect(gameBoard.missCount).toBe(2)
})

test('All ships are sunk', () => {
  gameBoard.place([0, 0], ship)
  gameBoard.receiveAttack([0, 0])
  gameBoard.receiveAttack([1, 0])
  expect(gameBoard.isAllShipsSunk()).toBe(true)
})

test('Not all ships are sunk', () => {
  gameBoard.place([0, 0], ship)
  gameBoard.receiveAttack([0, 0])
  expect(gameBoard.isAllShipsSunk()).toBe(false)
})
