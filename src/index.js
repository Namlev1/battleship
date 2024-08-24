import { addHeader, addMain } from './dom/createHomePage'
import './dom/styles.css'
import Game from './game/game'

const game = new Game()

addHeader()
addMain(game.playerBoard, game.enemyBoard)