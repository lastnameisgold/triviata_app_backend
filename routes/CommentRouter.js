const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/view', controller.getCommentsAll)
Router.get('/view/quiz/:quiz_id', controller.getCommentByQuizId)
Router.get('/view/flashcard/:flashcard_id', controller.getCommentByFlashcardId)

module.exports = Router
