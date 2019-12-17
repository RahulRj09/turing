const knex = require("../models/knex");

exports.categories = (req, res) => {
  knex("category")
    .select("*")
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
};

exports.getCategoryById = (req, res) => {
  knex("category")
    .select("*")
    .where("category_id", req.params.category_id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json("data not found");
    });
};

exports.getCategoryUsingProductId = (req, res) => {
  knex
    .select("*")
    .from("product")
    .join("category", "category.category_id", "product.product_id")
    .where({ product_id: req.params.product_id })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json("data not found");
    });
};

exports.getCategoryUsingDepartmentId = (req, res) => {
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
};
