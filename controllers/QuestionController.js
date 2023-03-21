const { Question } = require('../models')

//C
const createQuestion = async (req, res) => {
  try {

  } catch (error) {
    throw error
  }
}

//R
const getQuestionsAll = async (req, res) => {
  try {
    const result = await Question.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

//U
const updateQuestion = async (req, res) => {
  try {

  } catch (error) {
    throw error
  }
}

//D
const deleteQuestion = async (req, res) => {
  try {

  } catch (error) {
    throw error
  }
}

module.exports = {
  createQuestion,
  getQuestionsAll,
  updateQuestion,
  deleteQuestion
}
