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

category.get("/categories/inDepartment/:department_id", (req, res) => {
  knex
    .select("*")
    .from("department")
    .join("category", "category.category_id", "department.department_id")
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json("data not dound");
    });
});

module.exports = category;
