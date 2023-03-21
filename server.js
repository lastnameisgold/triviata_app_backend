const express = require('express')
const cors = require('cors')
<<<<<<< HEAD
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
=======
// const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
// const PostRouter = require('./routes/PostRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
// app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
// app.use('/posts', PostRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
>>>>>>> b665acb46f5cd6971ce0ed53bdad9996d78bf63a
