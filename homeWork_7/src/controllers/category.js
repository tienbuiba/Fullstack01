const categoryService = require('../services/category')


const getAllCategory = async (req, res) => {
    const { data, metadata } = await categoryService.getAllCategory(req.pagination)
    res.send({
        status: 1,
        data,
        metadata

    })
}
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const data = await categoryService.getCategoryById(id);

    res.send({
        status: 200,
        data
    })


}
const createCategory = async (req, res) => {

    await categoryService.createCategory(req.body)
    res.send({
        status: 1
    })
}

const updateCategoryById = async (req, res) => {
    const { id } = req.params;
    await categoryService.updateCategory(id, req.body)
    res.send({
        status: 1
    })

}
const deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    await categoryService.deleteCategory(id)
    res.send({
        status: 1
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}





