const express = require("express");
const department = express.Router();
const knex = require("../../models/knex");
department.get("/", (req, res) => {
  knex("department")
    .select("*")
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
});
department.get("/departments/:department_id", (req, res) => {
  knex("department")
    .select("*")
    .where("department_id", req.params.department_id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
});
module.exports = department;
