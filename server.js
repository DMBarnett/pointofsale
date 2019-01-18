const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const googleStrat = require("passport-google-oauth20").Strategy;
const GSkey = require("./config/keys");
const routes = require("./routes")
const path =require("path")
const PORT = process.env.port || 3001;
const db = require("./models")
// const db = require("models");

SALT_WORK_FACTOR = 12

app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());

passport.use(new googleStrat({
  clientID: GSkey.googleAuthClientID,
  clientSecret: GSkey.googleAuthSecret,
  callbackURL:"/auth/google/callback"
}, (accessToken)=>{
  console.log(accessToken)
}))

app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}))

app.get("/auth/google/callback", passport.authenticate("google"))

app.use(routes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.sequelize.sync().then(function() {  
  app.listen(PORT, ()=>`Server running on ${PORT}`);
});