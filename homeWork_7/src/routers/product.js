const Route = require('express').Router();
const productController = require('../controllers/product')

Route.get('/', productController.getAllProduct);
Route.get('/:id', productController.getProductById);
Route.post('/', productController.createProduct);
Route.put('/:id', productController.updateProduct);
Route.delete('/:id', productController.deleteProduct);

module.exports = Route;