const express = require("express");
const route = express.Router();
const path = require("path");
const root = require("../utils/path");
const routeProducts = require("./admin");
const { title } = require("process");

route.get("/", (req, res, next) => {
  const products = routeProducts.products;
  res.render("shop", { prods: products, title: "shop room" });
  console.log("prr", routeProducts.products);
});

module.exports = route;
