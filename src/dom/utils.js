export function getDraggedShipLength() {
  const ship = document.querySelector('.dragging').firstChild
  const length = Number.parseInt(ship.dataset.shipId, 10)
  return length
}

export function getDraggedShipDom() {
  return document.querySelector('.dragging')
}

function getCellIndex(cell) {
  const board = cell.parentElement
  const childrenArr = Array.from(board.children)
  const index = childrenArr.indexOf(cell)
  return index
}

export function isCellOutOfBound(cell) {
  if (!cell) {
    return true
  }
  const index = getCellIndex(cell)
  return index % 11 === 0
}

export function isCellInAvailable(cell) {
  return cell.classList.contains('locked')
}
