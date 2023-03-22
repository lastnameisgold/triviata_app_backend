const { User } = require('../models')

//R
const getUsersAll = async (req, res) => {
  try {
    let result = await User.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsersAll
}