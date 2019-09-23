const express = require('express');
const router = express.Router();
const knex = require('../knex');
router.use(express.json())
router.get("/departments",(req,res)=>{
        knex('department').select('*')
            .then((data)=> {
                return res.json(data);
            }).catch((err)=>{
                return res.json("data not found");
            })
    })
router.get("/departments/:id",(req,res)=>{
        knex('department').select('*').where('department_id',  req.params.id)
            .then((data)=> {
                return res.json(data);
            }).catch((err)=>{
                return res.json("data not found");
            })
    })
module.exports = router; 