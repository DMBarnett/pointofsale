const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const googleStrat = require("passport-google-oauth20").Strategy;
const GSkey = require("./config/keys");
const routes = require("./routes")
const path =require("path")
const PORT = process.env.PORT || 3002;
const db = require("./models")

app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
require("./routes/api/categories.js")(app);

app.use(routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.sequelize.sync().then(function() {  
  app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});
});