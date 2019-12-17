const express = require("express");
const customer = express.Router();
const customerController = require("../../controllers/customer");

customer.post("/create", customerController.create);
customer.post("/login", customerController.login);

module.exports = customer;
