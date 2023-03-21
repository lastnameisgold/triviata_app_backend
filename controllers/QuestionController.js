const { Question } = require('../models')

//join quiz and question together ??

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
    let result = await Question.findAll()
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
  deleteQuestion,
}
