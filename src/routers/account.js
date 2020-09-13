const Route = require('express').Router();
const accountController = require('../controllers/account');
const { tryCatch } = require('../middlewares/errorHandle');



Route.get('/', 
tryCatch(  accountController.getAllAccount))
Route.get('/:id', 
tryCatch(accountController.getAccountById))
Route.post('/', 
tryCatch(accountController.createAccount))
Route.put('/:id',
 tryCatch(accountController.updateAccountById))
Route.delete('/:id',
tryCatch(accountController.deleteAccountById))




module.exports = Route;



