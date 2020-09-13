const categoryService = require('../services/category')


const getAllCategory = async (req, res) => {
    const { data, metadata } = await categoryService.getAll(req.pagination)
    res.send({
        status: 1,
        data,
        metadata

    })
}
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const data = await categoryService.getById(id);

    res.send({
        status: 200,
        data
    })


}
const createCategory = async (req, res) => {

    await categoryService.create(req.body)
    res.send({
        status: 1
    })
}

const updateCategoryById = async (req, res) => {
    const { id } = req.params;
    await categoryService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    await categoryService.deleteById(id)
    res.send({
        status: 1
    })
}


module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
  
}
