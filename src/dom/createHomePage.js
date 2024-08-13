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

export default () => {
  addHeader()
}
