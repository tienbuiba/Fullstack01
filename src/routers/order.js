const Route = require('express').Router();
const orderController = require('../controllers/order');
const { tryCatch } = require('../middlewares/errorHandle');



Route.get('/',
tryCatch( orderController.getAllOrder))
Route.get('/:id',
 tryCatch(orderController.getOrderById))
Route.post('/', 
tryCatch(orderController.createOrder))
Route.put('/:id', 
tryCatch(orderController.updateOrderById))
Route.delete('/:id',
tryCatch( orderController.deleteOrderById))

module.exports = Route;