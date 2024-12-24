const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();
const path = require("path");
const root = require("./utils/path");

app.use("/admin", adminRoute.routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(shopRoute);

app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(root, "views", "404.html"));
});

app.listen(3000);
