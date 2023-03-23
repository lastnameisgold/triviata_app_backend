const { Quiz } = require('../models')

//C
const createQuiz = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.userId)
    let quizContent = {
      ownerId,
      ...req.body
    }
    let quiz = Quiz.create(quizContent)
    res.send(quiz)
  } catch (error) {
    throw error
  }
}

//R
const getQuizAll = async (req, res) => {
  try {
    let result = await Quiz.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

//U
const updateQuiz = async (req, res) => {
  try {
    let quizId = parseInt(req.params.quizId)
    let updatedQuiz = await Quiz.update(req.body, {
      where: { id: quizId },
      returning: true
    })
    res.send(updatedQuiz)
  } catch (error) {
    throw error
  }
}

//D
const deleteQuiz = async (req, res) => {
  try {
    let quizId = parseInt(req.body.quizId)
    await Quiz.destroy({
      where: { id: quizId }
    })
    res.send(`Successfully deleted quiz id of ${quizId}.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createQuiz,
  getQuizAll,
  updateQuiz,
  deleteQuiz
}