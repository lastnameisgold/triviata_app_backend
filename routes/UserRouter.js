const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/view', controller.getUsersAll)
Router.get('/view/:email', controller.getUserByEmail)

module.exports = Router
