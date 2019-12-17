const express = require("express");
const department = express.Router();
const departmentController = require("../../controllers/department");
department.get("/", departmentController.getDepartments);
department.get("/:department_id", departmentController.getDepartmentById);
module.exports = department;
