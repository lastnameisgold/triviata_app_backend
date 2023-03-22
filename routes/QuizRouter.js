const Router = require('express').Router()
const controller = require('../controllers/QuizController')

Router.get('/view', controller.getQuizAll)
Router.post('/create', controller.createQuiz)
Router.put('/:quizId', controller.updateQuiz)
Router.delete('/:quizId', controller.deleteQuiz)

module.exports = Router
