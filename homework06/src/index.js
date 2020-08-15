const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const categoryRoute = require('./routers/category');

app.use(bodyParser.urlencoded({extended:true }))

app.use(bodyParser.json())
app.use('/api/v1/category',categoryRoute);


app.get('/', (req, res) => {
    res.send('ok ')
})
const hamxuli=()=>{
    console.log('running at 8080')
}
app.listen(8080 ,hamxuli);

