export function getDraggedShipLength() {
  const ship = document.querySelector('.dragging').firstChild
  const length = Number.parseInt(ship.dataset.shipId, 10)
  return length
}

export function getDraggedShipDom() {
  return document.querySelector('.dragging')
}