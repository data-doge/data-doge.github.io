const html = require('choo/html')

const home = (state, emit) => {
  return html`
    <div id='home'>
      <h1>eugene lynch</h1>
      <ul>
        <li class='list-item'><span>million dollar startup ideas</span></li>
        <li class='list-item'><span>parallel universes</span></li>
        <li class='list-item'><span>professional cat photography</span></li>
      </ul>
    </div>
  `
}

module.exports = home
