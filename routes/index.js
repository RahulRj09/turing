const express = require("express");
const turing = express.Router();
const department = require("./department/department");

turing.use("/department", department);

module.exports = turing;
