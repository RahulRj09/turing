const express = require("express");
const product = express.Router();
const productController = require("../../controllers/product");

product.use(express.json());
product.get("/", productController.getProducts);
product.get("/search/:search", productController.searchProduct);
product.get("/:product_id", productController.getProductById);

module.exports = product;
