const knex = require("../models/knex");

exports.getAttributes = (req, res) => {
  knex("attribute")
    .select("*")
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.jsonp(error);
    });
};
