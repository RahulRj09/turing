const knex = require("../models/knex");

exports.create = (req, res) => {
  knex("customer")
    .insert({
      name: req.body.name,
      email: req.body.emailId,
      password: req.body.password
    })
    .then(success => {
      return res.send("Created customer");
    })
    .catch(error => {
      return res.send(error);
    });
};

exports.login = (req, res) => {
  knex("customer")
    .select("*")
    .where({ email: req.body.emailId, password: req.body.password })
    .then(success => {
      return res.json(success);
    })
    .catch(error => {
      return res.send(error);
    });
};
