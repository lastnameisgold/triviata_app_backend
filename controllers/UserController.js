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

const updateUser = async (req, res) => {
  try {
    let userEmail = (req.params.email)
    let updatedUser = await User.update(req.body, {
      where: { email: userEmail },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const updateUserById = async (req, res) => {
  try {
    let userId = (req.params.id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let userEmail = (req.params.email)
    await User.destroy({
      where: { email: userEmail }
    })
    res.send(`Successfully deleted user profile for ${userEmail}. We hope see you again!`)
  } catch (error) {
    throw error
  }
}

const deleteUserById = async (req, res) => {
  try {
    let userId = (req.params.id)
    await User.destroy({
      where: { id: userId }
    })
    res.send(`Successfully deleted user profile for ${userId}. We hope see you again!`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsersAll,
  getUserByEmail,
  updateUser,
  updateUserById,
  deleteUser,
  deleteUserById
}