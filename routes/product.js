const express = require('express');
const product = express.Router();
const knex = require('../models/knex');
product.use(express.json())
product.get("/product",(req,res)=>{
    knex("product").select("*")
    .then((data)=> {
        return res.json(data);
    }).catch((err)=>{
        return res.json("data not found");
    })
})

module.exports = product;