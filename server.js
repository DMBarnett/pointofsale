const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.port || 3000;


app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());

const products = require("./routes/api/products");
app.use("/api/products", products);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Mongo config
const dbkeys = require("./config/keys").mongoURI;

mongoose
  .connect(dbkeys)
  .then(()=> console.log("Candygram for Mongo, connection made"))
  .catch(err => console.log(err));

app.listen(PORT, ()=>`Server running on ${PORT}`);