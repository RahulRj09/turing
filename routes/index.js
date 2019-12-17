const express = require("express");
const turing = express.Router();
const department = require("./department/department");
const category = require("./category/category");
const attribute = require("./attribute/attribute");

turing.use("/department", department);
turing.use("/category", category);
turing.use("/attribute", attribute);

module.exports = turing;
