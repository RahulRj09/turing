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

exports.getAttributeById = (req, res) => {
  knex("attribute")
    .select("*")
    .where("attribute_id", req.params.attribute_id)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      res.jsonp(error);
    });
};
