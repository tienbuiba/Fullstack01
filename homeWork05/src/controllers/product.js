const pool = require('../utils/db')

const getAllProduct=(req,res)=>{
    pool.query('select * from `product`', (err, data) => {
        if (err) { console.log(err) }
        res.send(data)
    })
}
const getProductById=(req,res)=>{
    res.send('getproduct');
}
const createProductById=(req,res)=>{
    res.send('createproduct');
}
const updateProductById=(req,res)=>{
res.send('updateproduct');
}
const deleteProductById=(req,res)=>{
res.send('deleteproduct');
}

module.exports={
    getAllProduct,
    getProductById,
    createProductById,
    updateProductById,
    deleteProductById
}