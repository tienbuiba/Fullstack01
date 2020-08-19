
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const categoryRoute = require('./routers/category');
const paremeterRoute = require('./routers/parameter');
const productRoute = require('./routers/product');
const accountRoute = require('./routers/account');
const orderRoute = require('./routers/order');
const bodyParser = require('body-parser');

const pagination = require('./middlewares/pagination');

const app = express();
app.use(bodyParser.urlencoded({    extended: true}));
app.use(bodyParser.json());
app.use(pagination);



app.use('/api/v1/order', orderRoute);
app.use('/api/v1/account', accountRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/parameter', paremeterRoute);
app.use('/api/v1/category', categoryRoute)






const PORT = process.env.API_PORT
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`App listen at ${PORT}`);
})














