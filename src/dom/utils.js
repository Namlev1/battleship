export function getDraggedShipLength() {
  const ship = document.querySelector('.dragging').firstChild
  const length = Number.parseInt(ship.dataset.shipId, 10)
  return length
}

export function isCellInvalid(cell) {
  const board = cell.parentElement
  const childrenArr = Array.from(board.children)
  const index = childrenArr.indexOf(cell)
  return (index - 10) % 11 === 0
}
