const categoryService = require('../services/category')

const getAllCategory = async (req, res) => {
    const data = await categoryService.getAllCategory()
    res.send({
        status: 1,
        data
    })
}
const getCategoryById = async (req, res) => {
    //   const id=req.params.id
    const { id } = req.params
    const data = await categoryService.getCategoryById(id)
    res.send({
        status: -1
    })
}
const createCategory = async (req, res) => {
    const category = {
        categoryId: req.body.categoryId,
        display: req.body.display,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    }
    const data = await categoryService.createCategory(category);
    res.send(
        {
            status: 1
        }
    )
}

const updateCategoryById = async (req, res) => {
    const { id } = req.params;
    const update = {
        display: req.body.display,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    }
    const data = await categoryService.updateCategoryById(id, update);
    res.send(
        {
            status: 1 
        }
    )
}
const deleteCategoryById = async (req, res) => {
     //   const id=req.params.id
    const { id } = req.params;
    const data = await categoryService.deleteCategoryById(id);
    res.send(
        {
            status: 1 
        }
    )
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}

