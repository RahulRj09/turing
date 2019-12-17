const express = require("express");
const category = express.Router();
const knex = require("../../models/knex");
const categoryController = require("../../controllers/category");

category.use(express.json());

category.get("/", categoryController.categories);

category.get("/:category_id", categoryController.getCategoryById);

category.get(
  "/inProduct/:product_id",
  categoryController.getCategoryUsingProductId
);

category.get(
  "/inDepartment/:department_id",
  categoryController.getCategoryUsingDepartmentId
);

module.exports = category;
