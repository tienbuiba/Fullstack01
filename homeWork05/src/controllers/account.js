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
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById
}