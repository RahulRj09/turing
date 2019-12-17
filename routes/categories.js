const express = require('express');
const router = express.Router();
const knex = require('../models/knex');
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

router.get("/categories/inProduct/:product_id",(req,res)=>{
    knex.select("*").from("product").join('category','category.category_id','product.product_id')
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json("data not found");
    })
})

router.get("/categories/inDepartment/:department_id",(req,res)=>{
    knex.select("*").from("department").join('category','category.category_id','department.department_id')
    .then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json("data not dound");
    })
})

module.exports = router;