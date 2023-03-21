const Router = require('express').Router()
const controller = require('../controllers/QuizController')

Router.get('/view', controller.getQuizAll)

module.exports = Router
