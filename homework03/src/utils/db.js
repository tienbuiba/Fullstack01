
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'shopese'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});