const pool = require('../utils/db')

const getAllOrder=(req,res)=>{
    pool.query('select * from `order`', (err, data) => {
        if (err) { console.log(err) }
        res.send(data)
    })
}
const getOrderById=(req,res)=>{
    res.send('get');
  }
  const createOrder=(req,res)=>{
      res.send('create');
  }
  const updateOrderById=(req,res)=>{
  res.send('update');
  }
  const deleteOrderById=(req,res)=>{
      res.send('delete');
  }
  module.exports={
      getAllOrder,
      getOrderById,
      createOrder,
      updateOrderById,
      deleteOrderById
  }