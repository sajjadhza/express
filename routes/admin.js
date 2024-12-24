const express = require("express");
const path = require("path");
const route = express.Router();
const root = require("../utils/path");

const product = [];

route.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(root, "views", "add-product.html"));
});

route.post("/add-product", (req, res, next) => {
  product.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = route;
exports.products = product;
