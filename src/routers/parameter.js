
const Route = require('express').Router();
const ParameterController = require('../controllers/parameter');
const { tryCatch } = require('../middlewares/errorHandle');


Route.get('/list-category-id',
tryCatch( ParameterController.getAllCategoryId));
Route.get('/list-product-id',
tryCatch( ParameterController.getAllProductId));
Route.get('/list-account-id', 
tryCatch( ParameterController.getAllAccountId));
Route.get('/list-order-id',
tryCatch( ParameterController.getAllOrderId));



module.exports = Route;