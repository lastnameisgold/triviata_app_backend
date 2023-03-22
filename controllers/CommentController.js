const { Comment } = require('../models')

//R
const getCommentsAll = async (req, res) => {
  try {
    let result = await Comment.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const getCommentByQuizId = async (req, res) => {
  try {
    let quizComments = await Comment.findAll({
      where: { quizId: req.params.quiz_id }
    })
    res.send(quizComments)
  } catch (error) {
    throw error
  }
}

const getCommentByFlashcardId = async (req, res) => {
  try {
    let flashcardComments = await Comment.findAll({
      where: { flashcardId: req.params.flashcard_id }
    })
    res.send(flashcardComments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCommentsAll,
  getCommentByQuizId,
  getCommentByFlashcardId
}