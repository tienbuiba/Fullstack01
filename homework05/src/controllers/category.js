const pool = require('../utils/db')

const getAllCategory=(req,res)=>{
    pool.query('select * from `category`', (err, data) => {
        if (err) { console.log(err) }
        res.send(data)
    })
}
const getCategoryById=(req,res)=>{
    res.send('getcategory')
}
const createCategory=(req,res)=>{

    res.send('createcategory');
}
const updateCategoryById=(req,res)=>{
    res.send('updatecategory');
}
const deleteCategoryById=(req,res)=>{
    res.send('deletecategory');
}

module.exports={
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}