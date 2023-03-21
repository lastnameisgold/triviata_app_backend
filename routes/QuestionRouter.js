const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.get('/questions', controller.getQuestionsAll)

module.exports = Router
