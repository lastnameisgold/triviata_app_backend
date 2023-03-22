const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/view', controller.getCommentsAll)
Router.get('/view/quiz/:quiz_id', controller.getCommentByQuizId)
Router.get('/view/flashcard/:flashcard_id', controller.getCommentByFlashcardId)
Router.post('/:flashcardId/flashcard', controller.createCommentOnFlashcard)
Router.post('/:quizId/quiz', controller.createCommentOnQuiz)
Router.put('/:commentId', controller.updateComment)
Router.delete('/:commentId', controller.deleteComment)

module.exports = Router
