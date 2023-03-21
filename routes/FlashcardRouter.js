const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')

Router.get('/view', controller.getFlashcardsAll)

module.exports = Router
