const { Quiz } = require('../models')

//join quiz and question together ??

//R
const getQuizAll = async (req, res) => {
  try {
    let result = await Quiz.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getQuizAll
}