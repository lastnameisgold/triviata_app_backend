const { Comment } = require('../models')

//C
const createCommentOnQuiz = async (req, res) => {
  try {
    let quizId = parseInt(req.params.quizId)
    let commentBody = {
      quizId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const createCommentOnFlashcard = async (req, res) => {
  try {
    let flashcardId = parseInt(req.params.flashcardId)
    let commentBody = {
      flashcardId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

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

//U
const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

//D
const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comment.destroy({
      where: { id: commentId }
    })
    res.send(`Successfully deleted comment id of ${commentId}.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createCommentOnQuiz,
  createCommentOnFlashcard,
  getCommentsAll,
  getCommentByQuizId,
  getCommentByFlashcardId,
  updateComment,
  deleteComment
}