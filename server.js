const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', AppRouter)

app.get('/', (req, res) => {
  res.send('Testing that the server works...')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
