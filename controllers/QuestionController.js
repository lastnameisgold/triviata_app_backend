const { Question } = require('../models')

//C
const createQuestion = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.userId)
    let questionContent = {
      ownerId,
      ...req.body
    }
    let question = await Question.create(questionContent)
    res.send(question)
  } catch (error) {
    throw error
  }
}

//R
const getQuestionsAll = async (req, res) => {
  try {
    let result = await Question.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const getQuestionsByQuizId = async (req, res) => {
  try {
    let quiz = await Question.findAll({
      where: { quizId: req.params.quizId }
    })
    res.send(quiz)
  } catch (error) {
    throw error
  }
}

//U
const updateQuestion = async (req, res) => {
  try {
    let questionId = parseInt(req.params.questionId)
    let updatedQuestion = await Question.update(req.body, {
      where: { id: questionId },
      returning: true
    })
    res.send(updatedQuestion)
  } catch (error) {
    throw error
  }
}

//D
const deleteQuestion = async (req, res) => {
  try {
    let questionId = parseInt(req.body.questionId)
    await Question.destroy({
      where: { id: questionId }
    })
    res.send(`Successfully deleted question id of ${questionId}.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createQuestion,
  getQuestionsAll,
  getQuestionsByQuizId,
  updateQuestion,
  deleteQuestion
}
