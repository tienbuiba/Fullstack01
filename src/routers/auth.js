const Route = require('express').Router();
const authController = require('../controllers/auth')

Route.get('/login', authController.login);

module.exports = Route