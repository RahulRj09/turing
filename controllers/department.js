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

exports.getDepartmentById = (req, res) => {
  knex("department")
    .select("*")
    .where("department_id", req.params.department_id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json("data not found");
    });
};
