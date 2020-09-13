const accountService = require('../services/account')

const security = require('../utils/security');

const createAccount = async (req, res, next) => {
  const newAccount = {
    username: req.body.username,
    password: req.body.password
  
  }
  console.log('tao moi tai khoan', newAccount);
  if (!newAccount.username) {
    const result = {
      status: 0,
      message: 'Khong duoc de trong tai khoan',
    };
  res.status(400).send(result);
  };
  if (!newAccount.password || newAccount.password.length < 6) {
    const result = {
      status: 0,
      message: 'Mat khau phai co 6 ki tu!',
    };
    res.status(400).send(result);
  };
  
  const message = await accountService.create(newAccount);
  res.send({
    status: 1,
    message: message
  });
  
}

const getAllAccount = async (req, res) => {
    const { data, metadata } = await accountService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, data
    })
}
const getAccountById = async (req, res) => {
    const { id } = req.params;
    const data = await accountService.getById(id)
    res.send({
        status: 1, data
    })
}


   

const updateAccountById = async (req, res) => {
    const { id } = req.params;
    await accountService.updateById(id, req.body)
    res.send({
        status: 1
    })

}
const deleteAccountById = async (req, res) => {
    const { id } = req.params;
    await accountService.deleteById(id)
    res.send({
        status: 1
    })
}


module.exports = {
    getAllAccount,
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById,
  
}