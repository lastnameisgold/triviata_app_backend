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

const getUserByEmail = async (req, res) => {
  try {
    let user = await User.findAll({
      where: { email: req.params.email }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsersAll,
  getUserByEmail
}