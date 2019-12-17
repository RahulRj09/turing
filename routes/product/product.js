const express = require("express");
const product = express.Router();
const productController = require("../../controllers/product");

product.use(express.json());
product.get("/", productController.getProducts);
product.get("/search/:search", productController.searchProduct);
product.get("/:product_id", productController.getProductById);
product.get(
  "/inCategory/:category_id",
  productController.getProductUsingCategoryId
);
product.get(
  "/inDepartment/:department_id",
  productController.getProductUsingDepartmentId
);

product.get("/:product_id/details", productController.getProductById);

module.exports = product;
