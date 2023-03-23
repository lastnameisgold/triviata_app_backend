const Router = require('express').Router()
const controller = require('../controllers/BookmarkController')

Router.get('/view', controller.getBookmarksAll)
Router.post('/create', controller.createBookmark)
Router.delete('/:bookmarkId', controller.deleteBookmark)

//not adding an updateBookmark function since that doesn't really make sense to me lol
module.exports = Router
