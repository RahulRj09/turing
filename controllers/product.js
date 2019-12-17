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
