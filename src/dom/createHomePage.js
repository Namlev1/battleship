import GithubIcon from '../../assets/img/github.png'

export const addHeader = () => {
  const header = document.querySelector('#header')

  const battleship = document.createElement('p')
  battleship.textContent = 'BATTLESHIP'
  battleship.classList.add('header-text')

  const github = document.createElement('div')
  github.id = 'github'

  const createdBy = document.createElement('p')
  createdBy.textContent = 'Created by Namlev1 @ 2024'

  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/Namlev1'
  githubLink.target = '_blank'
  githubLink.rel = 'noopener noreferrer'

  const githubIcon = document.createElement('img')
  githubIcon.alt = 'Github Icon'
  githubIcon.src = GithubIcon

  githubLink.appendChild(githubIcon)
  github.appendChild(createdBy)
  github.appendChild(githubLink)
  header.appendChild(battleship)
  header.appendChild(github)
}

export const addMain = (playerDom, enemyDom) => {
  const main = document.querySelector('#main')
  const gameGrid = document.createElement('div')
  gameGrid.id = 'game-grid'

  const playerDiv = document.createElement('div')
  playerDiv.classList.add('game-panel')
  playerDiv.classList.add('player')
  const enemyDiv = document.createElement('div')
  enemyDiv.classList.add('game-panel')
  enemyDiv.classList.add('enemy')

  const fleetBanner = document.createElement('button')
  fleetBanner.disabled = true
  fleetBanner.textContent = 'YOUR FLEET'

  const enemyBanner = document.createElement('button')
  enemyBanner.disabled = true
  enemyBanner.textContent = 'OPPONENT'

  playerDiv.appendChild(fleetBanner)
  playerDiv.appendChild(playerDom.boardDom.getDomElement())
  playerDiv.appendChild(playerDom.shipyardDom.getDomElement())
  enemyDiv.appendChild(enemyBanner)
  enemyDiv.appendChild(enemyDom.boardDom.getDomElement())
  gameGrid.appendChild(playerDiv)
  gameGrid.appendChild(enemyDiv)
  main.appendChild(gameGrid)
}

export const showRoundButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Player round'
  button.classList.add('round')
  button.classList.add('player-round')
  const main = document.querySelector('#main')
  main.appendChild(button)
}

export const toggleRoundButton = (() => {
  let isPlayerRound = true

  return () => {
    isPlayerRound = !isPlayerRound
    const button = document.querySelector('.round')
    if (isPlayerRound) {
      button.textContent = 'Player round'
      button.classList.add('player-round')
    } else {
      button.textContent = 'Enemy round...'
      button.classList.remove('player-round')
    }
  }
})()

const showDialog = (className, text) => {
  const dialog = document.createElement('dialog')
  dialog.classList.add(className)

  const p = document.createElement('p')
  p.textContent = text
  const form = document.createElement('form')
  form.method = 'dialog'
  const button = document.createElement('button')
  button.textContent = 'Play again'
  button.addEventListener('click', () => window.location.reload())

  const body = document.querySelector('body')

  form.appendChild(button)
  dialog.appendChild(p)
  dialog.append(form)
  body.appendChild(dialog)
  dialog.showModal()
  dialog.focus()
}

export const showEnemyWon = () => showDialog('enemy-won', 'Enemy has won!')

export const showPlayerWon = () => showDialog('player-won', 'You have won!')
