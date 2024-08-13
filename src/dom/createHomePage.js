const main = document.querySelector('#main');

export default () => {
  const p = document.createElement('p')
  p.textContent = 'BATTLESHIP'

  main.appendChild(p)
}