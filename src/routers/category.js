const Route = require('express').Router();
const categoryController = require('../controllers/category')
const { tryCatch } = require('../middlewares/errorHandle');


Route.get('/', 
tryCatch(categoryController.getAllCategory))
Route.get('/:id',
tryCatch( categoryController.getCategoryById))
Route.post('/', 
tryCatch(categoryController.createCategory))
Route.put('/:id',
 tryCatch(categoryController.updateCategoryById))
Route.delete('/:id',
tryCatch( categoryController.deleteCategoryById))


module.exports = Route;