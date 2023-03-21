const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/view', controller.getUsersAll)

module.exports = Router
