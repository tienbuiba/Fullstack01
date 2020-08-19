const categoryService = require('../services/category');
const productService = require('../services/product');
const accountService = require('../services/account');
const orderService = require('../services/order');

const getAllCategoryId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await categoryService.getAllCategoryId()
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getAllProductId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await productService.getAllId();
  res.send({
    status: 1,
    data,
    metadata,
  })
}


const getAllAccountId = async (req, res) => {
  const { data, metadata } = await accountService.getAllId()
  res.send({
    status: 1,
    metadata,
    data
  })
}
const getAllOrderId = async (req, res) => {
  const { data, metadata } = await orderService.getAllId()
  res.send({
    status: 1,
    metadata,
    data
  })
}

module.exports = {
  getAllCategoryId,
  getAllProductId,
  getAllAccountId,
  getAllOrderId
}


