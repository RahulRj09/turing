const express = require("express");
const attributes = express.Router();
const knex = require("../../models/knex");
const attributeController = require("../../controllers/attribute");

attributes.use(express.json());

attributes.get("/", attributeController.getAttributes);
attributes.get("/:attribute_id", attributeController.getAttributeById);

attributes.get(
  "/value/:attribute_id",
  attributeController.getAttributeValueUsingAttributeId
);

module.exports = attributes;
