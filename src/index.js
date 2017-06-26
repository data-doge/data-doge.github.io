const choo = require('choo')
const log = require('choo-log')
const { home } = require('./pages')
const { NODE_ENV } = process.env

const app = choo()
if (NODE_ENV !== 'production') { app.use(log()) }

app.route('/', home)
const tree = app.start()
document.body.appendChild(tree)
