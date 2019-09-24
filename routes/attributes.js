const express = require("express");
const attributes = express.Router();
const knex = require("../knex");
attributes.use(express.json());
attributes.get("/attributes",(req,res)=>{
    knex("attribute").select("*")
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.jsonp(error);
    })
})

module.exports = attributes;