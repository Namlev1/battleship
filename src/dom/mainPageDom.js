import GithubIcon from '../../assets/img/github.png'

// Utility function to create an element with optional classes and content
const createElement = (
  tag,
  { classes = [], content = '', attributes = {} } = {}
) => {
  const element = document.createElement(tag)
  if (classes.length) element.classList.add(...classes)
  if (content) element.textContent = content
  Object.keys(attributes).forEach(attr =>
    element.setAttribute(attr, attributes[attr])
  )
  return element
}

export const addHeader = () => {
  const header = document.querySelector('#header')
  if (!header) return

  const battleship = createElement('p', {
    classes: ['header-text'],
    content: 'BATTLESHIP'
  })

  const github = createElement('div', { attributes: { id: 'github' } })
  const createdBy = createElement('p', { content: 'Created by Namlev1 @ 2024' })

  const githubLink = createElement('a', {
    attributes: {
      href: 'https://github.com/Namlev1',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  })

  const githubIcon = createElement('img', {
    attributes: {
      src: GithubIcon,
      alt: 'Github Icon'
    }
  })

  githubLink.appendChild(githubIcon)
  github.append(createdBy, githubLink)
  header.append(battleship, github)
}

export const addMain = (playerDom, enemyDom) => {
  const main = document.querySelector('#main')
  if (!main) return

  const gameGrid = createElement('div', { attributes: { id: 'game-grid' } })

  const createGamePanel = (dom, label, panelClass) => {
    const panel = createElement('div', { classes: ['game-panel', panelClass] })
    const banner = createElement('button', {
      content: label,
      attributes: { disabled: true }
    })
    panel.append(banner, dom.boardDom.getDomElement())
    if (panelClass === 'player') {
      panel.appendChild(dom.shipyardDom.getDomElement())
    }
    return panel
  }

  const playerDiv = createGamePanel(playerDom, 'YOUR FLEET', 'player')
  const enemyDiv = createGamePanel(enemyDom, 'OPPONENT', 'enemy')

  gameGrid.append(playerDiv, enemyDiv)
  main.appendChild(gameGrid)
}

export const showGraveyard = dom => {
  const enemyPanel = document.querySelector('.game-panel.enemy')
  enemyPanel.append(dom)
}

export const showRoundButton = () => {
  const main = document.querySelector('#main')
  if (!main) return

  const button = createElement('button', {
    classes: ['round', 'player-round'],
    content: 'Player round'
  })
  main.appendChild(button)
}

export const toggleRoundButton = (() => {
  let isPlayerRound = true

  return () => {
    const button = document.querySelector('.round')
    if (!button) return

    isPlayerRound = !isPlayerRound
    button.textContent = isPlayerRound ? 'Player round' : 'Enemy round...'
    button.classList.toggle('player-round', isPlayerRound)
  }
})()

const showDialog = (className, text) => {
  const body = document.querySelector('body')
  if (!body) return

  const dialog = createElement('dialog', { classes: [className] })
  const message = createElement('p', { content: text })

  const form = createElement('form', { attributes: { method: 'dialog' } })
  const button = createElement('button', { content: 'Play again' })

  button.addEventListener('click', () => window.location.reload())

  form.appendChild(button)
  dialog.append(message, form)
  body.appendChild(dialog)
  dialog.showModal()
  dialog.focus()
}

export const showEnemyWon = () => showDialog('enemy-won', 'Enemy has won!')
export const showPlayerWon = () => showDialog('player-won', 'You have won!')
