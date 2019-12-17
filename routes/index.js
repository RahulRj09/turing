const express = require("express");
const turing = express.Router();
const department = require("./department/department");
const category = require("./category/category");
const attribute = require("./attribute/attribute");
const product = require("./product/product");
const customer = require("./customer/customer");

turing.use("/department", department);
turing.use("/category", category);
turing.use("/attribute", attribute);
turing.use("/product", product);
turing.use("/customer", customer);

module.exports = turing;
