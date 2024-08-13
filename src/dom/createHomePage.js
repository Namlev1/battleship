import GithubIcon from '../../assets/img/github.png'

const addHeader = () => {
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

const addMain = () => {
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
  enemyDiv.appendChild(enemyBanner)
  gameGrid.appendChild(playerDiv)
  gameGrid.appendChild(enemyDiv)
  main.appendChild(gameGrid)
}

export default () => {
  addHeader()
  addMain()
}
