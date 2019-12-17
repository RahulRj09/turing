const knex = require("../models/knex");

exports.getDepartments = (req, res) => {
  knex("department")
    .select("*")
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
};
