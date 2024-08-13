import Ship from '../../src/game/ship'

test('Hit a ship', () => {
  const ship = new Ship()
  ship.hit()
  expect(ship.hitCount).toEqual(1)
})

test('Ship is sunk', () => {
  const ship = new Ship(2)
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})

test('Ship is not sunk', () => {
  const ship = new Ship(2)
  ship.hit()
  expect(ship.isSunk()).toBe(false)
})
