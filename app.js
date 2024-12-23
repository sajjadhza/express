const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("this is first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("this is second middleware");
  res.send("<h1> Hello lovely express</h1>");
});

app.listen(3000);
