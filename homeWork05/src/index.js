const express = require('express');
const bodyParser=require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

const categoryRoute = require('./routers/category');
const orderRoute=require('./routers/order');
const productRoute=require('./routers/product');
const accountRoute=require('./routers/account');

app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/order',orderRoute);
app.use('/api/v1/product',productRoute);
app.use('/api/v1/account',accountRoute);

app.get('/', (req, res) => {
    res.send('ok ')
})
const hamxuli = () => {
    console.log('dang chay cong 8080');
}

app.listen(8080, hamxuli)``