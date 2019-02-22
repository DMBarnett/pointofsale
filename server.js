const express = require("express");
const bodyParser = require("body-parser");

const session = require("express-sessions")
const passport = require("passport");
const routes = require("./routes")
const path =require("path")
let PORT = process.env.PORT || 3002;
const db = require("./models")
const app = express();



app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(session({ secret: 'master commander', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else{
  app.use(express.static("client/public"));
}
require("./routes/api/categories.js")(app);

app.use(routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {  
  app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});
});