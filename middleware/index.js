const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

//Hash and Digest our password
    const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
  }

//Compare our entered Password to our Hashed/Digested password
  const comparePassword = async (storedPassword, password) => {
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    return passwordMatch
  }

//Create the token we are going to run
  const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    return token
  }

//Verify token
  const verifyToken = (req, res, next) => {
    const { token } = res.locals
    try {
      let payload = jwt.verify(token, APP_SECRET)
      if (payload) {
        return next()
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized, Verify Payload' })
    } catch (error) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized, Verify Token' })
    }
  }

//This makes sure the computer is reading the token properly
  const stripToken = (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(' ')[1]
      if (token) {
        res.locals.token = token
        return next()
      }
    } catch (error) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized, Token Strip' })
    }
  }

  module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
  }