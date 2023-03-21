const Router = require('express').Router()
const HomeRouter = require('./HomeRouter')
const UserRouter = require('./UserRouter')
const BookmarkRouter = require('./BookmarkRouter')
const QuizRouter = require('./QuizRouter')
const FlashcardRouter = require('./FlashcardRouter')
const QuestionRouter = require('./QuestionRouter')
const CommentRouter = require('./CommentRouter')

//an actual route for project (for signed in users)
Router.use('/home', HomeRouter)

//test routes for information and CRUD display, these routes may be altered later on for project
Router.use('/users', UserRouter)
Router.use('/bookmarks', BookmarkRouter)
Router.use('/quizzes', QuizRouter)
Router.use('/flashcards', FlashcardRouter)
Router.use('/questions', QuestionRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
