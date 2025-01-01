const products = [];
const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const mainPath = require("../util/path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFromFile((pr) => {
      pr.push(this);
      fs.writeFile(p, JSON.stringify(pr), (err) => {
        console.log("====================", err);
      });
    });

    // products.push(this);
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
