const Route = require('express').Router();
const accountController = require('../controller/account');



Route.get('/', accountController.getAll)
Route.get('/:id', accountController.getById)
Route.post('/', accountController.create)
Route.put('/:id', accountController.updateById)
Route.delete('/:id', accountController.deleteById)

module.exports = Route;