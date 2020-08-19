
const Route = require('express').Router();
const ParameterController = require('../controllers/parameter')


Route.get('/list-category-id', ParameterController.getAllCategoryId);
Route.get('/list-product-id', ParameterController.getAllProductId);
Route.get('/list-account-id', ParameterController.getAllAccountId);
Route.get('/list-order-id', ParameterController.getAllOrderId);



module.exports = Route;