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
attributes.get("/attributes/:attribute_id",(req,res)=>{
    knex("attribute").select("*").where("attribute_id",req.param.attribute_id)
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.jsonp(error);
    })
})

attributes.get("/attributes/values/:attribute_id",(req,res)=>{
    knex("attribute_value").select("*")
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json("data not found");
    })
})

module.exports = attributes;