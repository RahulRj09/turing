const express = require('express');
const router = express.Router();
const knex = require('../knex');
router.use(express.json())
router.get("/categories",(req,res)=>{
    knex("category").select("*")
    .then((data)=> {
        return res.json(data);
    }).catch((err)=>{
        return res.json("data not found");
    })
})

router.get("/categories/:category_id",(req,res)=>{
    knex("category").select("*").where("category_id",req.params.category_id)
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json("data not found");
    })
})

module.exports = router;