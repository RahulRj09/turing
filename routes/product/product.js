const express = require("express");
const product = express.Router();
const productController = require("../../controllers/product");

product.use(express.json());
product.get("/", productController.getProducts);

module.exports = product;
