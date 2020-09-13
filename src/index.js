
const dotenv = require('dotenv').config();
const express = require('express');
const categoryRoute = require('./routers/category');
const parameterRoute = require('./routers/parameter');
const productRoute = require('./routers/product');
const accountRoute = require('./routers/account');
const orderRoute = require('./routers/order');
const bodyParser = require('body-parser');
const loginRoute = require('./routers/auth');

const pagination = require('./middlewares/pagination');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pagination);



app.use('/api/v1/order', orderRoute);
app.use('/api/v1/account', accountRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/parameter', parameterRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/auth', loginRoute);

app.get('/api/v1/test-err', (req, res, next) => {
  next('Có lỗi 1')
})
app.get('/api/v1/test-err2', (req, res, next) => {
  throw Error('Có lỗi 2')
})


const mw = require('./middlewares/errorHandle')

app.use(mw.errorHandle)
const log = (req, res, next) => {
  console.log('==========================')
  console.log('req.originalUrl\t', req.originalUrl);
  console.log('req.query\t', req.query);
  console.log('req.body\t', req.body);
  console.log('req.params\t', req.params);
  next();
}
app.use(log);

const PORT = 8080;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App listen at ${PORT}`);
})














