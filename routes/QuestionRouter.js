const Router = require('express').Router()
const controller = require('../controllers/QuestionController')

Router.get('/view/', controller.getQuestionsAll)
Router.get('/view/:quizId', controller.getQuestionsByQuizId)
Router.post('/create', controller.createQuestion)
Router.put('/:questionId', controller.updateQuestion)
Router.delete('/:questionId', controller.deleteQuestion)

module.exports = Router
