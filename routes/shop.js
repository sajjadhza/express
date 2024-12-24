const express = require("express");
const route = express.Router();
const path = require("path");
const root = require("../utils/path");

route.get("/", (req, res, next) => {
  res.sendFile(path.join(root, "views", "shop.html"));
});

module.exports = route;
