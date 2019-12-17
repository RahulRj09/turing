const express = require("express");
const attributes = express.Router();
const knex = require("../../models/knex");
const attributeController = require("../../controllers/attribute");

attributes.use(express.json());

attributes.get("/", attributeController.getAttributes);
attributes.get("/:attribute_id", attributeController.getAttributeById);

attributes.get("/attributes/values/:attribute_id", (req, res) => {
  knex("attribute_value")
    .select("*")
    .then(data => {
       
      res.json(data);
    })
    .catch(error => {
      res.json("data not found");
    });
});

module.exports = attributes;
