const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')
const AuthRouter = require('./routes/AuthRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api', AppRouter)

app.use('/api', (req, res, next) => {
  console.log('Accessing the /api endpoint...')
  next()
}, AppRouter)

app.use('/auth', AuthRouter)

app.get('/', (req, res) => {
  console.log(`Start point works...`)
  res.send('Testing that the server works...')
})

app.get('/test', (req, res) => {
  console.log(`Test route works...`)
  res.send(`This route works!!`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
