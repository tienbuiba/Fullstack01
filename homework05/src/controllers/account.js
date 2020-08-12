const pool=require('../utils/db');
    
const getAllAccount=(req,res)=>{
        pool.query('select * from `account', (err, data) => {
            if (err) { console.log(err) }
            res.send(data)
        })
    }

const getAccountById=(req,res)=>{
        res.send('getaccount');
}
const createAccount=(req,res)=>{
    res.send('createaccount');
}
const updateAccountById=(req,res)=>{
    res.send('updateaccount');
}
const deleteAccountById=(req,res)=>{
    res.send('deleteaccount');
}

module.exports={
    getAllAccount,
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById
}