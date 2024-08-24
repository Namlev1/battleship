export default class Ship {
  constructor(length, id) {
    this.length = length
    this.hitCount = 0
    this.id = id
  }

  hit() {
    this.hitCount += 1
  }

  isSunk() {
    return this.hitCount >= this.length
  }
}
