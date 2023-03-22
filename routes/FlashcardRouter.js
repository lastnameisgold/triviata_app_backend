const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')

Router.get('/view', controller.getFlashcardsAll)
Router.post('/create', controller.createFlashcard)
Router.put('/:flashcardId', controller.updateFlashcard)
Router.delete('/:flashcardId', controller.deleteFlashcard)

module.exports = Router
