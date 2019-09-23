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

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password:'password',
  database:'turing'
  }
}); 

const express = require('express');
const app = express();

app.listen(4000);
