const express = require("express");
const path = require("path");
const route = express.Router();
const root = require("../utils/path")

route.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(root,"views", "add-product.html"));
});

route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
