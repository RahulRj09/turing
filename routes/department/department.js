const express = require("express");
const department = express.Router();
const departmentController = require("../../controllers/department");
const knex = require("../../models/knex");
department.get("/", departmentController.getDepartments);
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
