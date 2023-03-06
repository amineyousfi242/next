const express = require('express')
const { signup } = require('../controllers/user.controller')

const route = express.Router()

const userController = require('../controllers/user.controller');

route.post('/singup' , userController.signup)

module.exports = route 