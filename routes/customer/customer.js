const express = require("express");
const customer = express.Router();
const customerController = require("../../controllers/customer");

customer.post("/create", customerController.create);

module.exports = customer;
