const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.get('/view/', controller.getQuestionsAll)

module.exports = Router
