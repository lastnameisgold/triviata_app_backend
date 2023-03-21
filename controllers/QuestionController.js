const { Question } = require('../models')

//test
const testQuestion = async (req, res) => {
  try {
    console.log(`This route works enough.`)
    res.send(`This route works!`)
  } catch (error) {
    throw error
  }
}

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
  deleteQuestion,
  testQuestion
}
