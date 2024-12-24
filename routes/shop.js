const express = require("express");
const route = express.Router();
const path = require("path");
const root = require("../utils/path");
const routeProducts = require("./admin");

route.get("/", (req, res, next) => {
  res.sendFile(path.join(root, "views", "shop.html"));
  console.log("prr", routeProducts.products);
});

module.exports = route;
