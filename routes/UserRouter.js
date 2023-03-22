const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/view', controller.getUsersAll)
Router.get('/view/:email', controller.getUserByEmail)
Router.put('/:email', controller.updateUser)

module.exports = Router
