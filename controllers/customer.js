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
