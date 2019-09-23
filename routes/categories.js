const express = require('express');
const router = express.Router();
const knex = require('../knex');
router.get("/categories",(req,res)=>{
    knex("category").select("*")
    .then((data)=> {
        return res.json(data);
    }).catch((err)=>{
        return res.json("data not found");
    })
})

module.exports = router;