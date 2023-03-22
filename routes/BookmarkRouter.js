const Router = require('express').Router()
const controller = require('../controllers/BookmarkController')

Router.get('/view', controller.getBookmarksAll)

module.exports = Router
