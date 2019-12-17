const knex = require("../models/knex");

exports.getProducts = (req, res) => {
  knex("product")
    .select("*")
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
};

exports.getProductById = (req, res) => {
  knex("product")
    .select("*")
    .where({ product_id: req.params.product_id })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
};

exports.searchProduct = (req, res) => {
  const search = req.params.search;
  knex
    .select(
      "product_id",
      "name",
      "description",
      "price",
      "discounted_price",
      "thumbnail"
    )
    .from("product")
    .where("name", "like", search)
    .orWhere("name", "like", search + " %")
    .orWhere("name", "like", "% " + search)
    .orWhere("description", "like", "%" + search + "%")
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      return res.send(error);
    });
};

exports.getProductUsingCategoryId = (req, res) => {
  knex("product")
    .select("*")
    .join(
      "product_category",
      "product.product_id",
      "product_category.product_id"
    )
    .where("product_category.category_id", req.params.category_id)
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      return res.send(error);
    });
};

exports.getProductUsingDepartmentId = (req, res) => {
  const id = req.params.department_id;
  knex
    .select("*")
    .from("product")
    .join("product_category", {
      "product.product_id": "product_category.product_id"
    })
    .join("category", {
      "product_category.category_id": "category.category_id"
    })
    .where("category.department_id", id)
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      return res.send(error);
    });
};
