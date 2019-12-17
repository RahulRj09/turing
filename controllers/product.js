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
