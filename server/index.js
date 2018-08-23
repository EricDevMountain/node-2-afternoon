const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const ctrl = require("./products_controller");

require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(errOR));

app.get("/api/products", ctrl.getAll);
app.get("/api/product/:id", ctrl.getOne);
app.post("/api/product", ctrl.create);
app.put("/api/product/:id", ctrl.update);
app.delete("/api/product/:id", ctrl.delete);

// app.post("/api/product", products_controller.create);
// app.get("/api/products", products_controller.getAll);
// app.get("/api/product/:id", products_controller.getOne);
// app.put("/api/product/:id", products_controller.update);
// app.delete("/api/product/:id", products_controller.delete);

app.listen(port, () => {
  console.log(`whistle tip for the Boys' on :${port}`);
});
