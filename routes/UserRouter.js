const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/view', controller.getUsersAll)
Router.get('/view/:email', controller.getUserByEmail)
Router.put('/:email', controller.updateUser)
Router.put('/update/:id', controller.updateUserById)
Router.delete('/:email', controller.deleteUser)
Router.delete('/delete/:id', controller.deleteUserById)


module.exports = Router
