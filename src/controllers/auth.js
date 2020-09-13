const authService = require('../services/auth')

const login = async (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  const result = await authService.login(user);

  if (result) {
     res.send({
      status: 1,
      token: result
    })
  } else {
    res.status(400).send({
      status: 0,
      message: 'Đang nhap  that bai !'
    })
  }
};

module.exports = {
  login
};