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
