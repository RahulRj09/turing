const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'turing'
});
module.exports = connection;
connection.connect(function(err){
  if (err){
    console.error('error connection: '+ err.stack)
    return;
  }
  console.log('connected as id ' + connection.threadId)
});


const express = require('express');
const app = express();
const department = require('./routes/department');
app.use('/',department);

const categories = require('./routes/categories');
app.use('/',categories);

const product = require('./routes/product');
app.use('/',product);

const attributes = require('./routes/attributes');
app.use('/',attributes);

app.listen(4000);
