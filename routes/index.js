const express = require("express");
const turing = express.Router();
const department = require("./department/department");
const category = require("./category/category");

turing.use("/department", department);
turing.use("/category", category);

module.exports = turing;
