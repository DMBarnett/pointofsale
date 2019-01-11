const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const googleStrat = require("passport-google-oauth20").Strategy;
const GSkey = require("./config/keys");
const routes = require("./routes")
const path =require("path")
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
passport.use(new googleStrat({
  clientID: GSkey.googleAuthClientID,
  clientSecret: GSkey.googleAuthSecret,
  callbackURL:"/auth/google/callback"
}, (accessToken)=>{

}))

app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}))

app.get("/auth/google/callback", passport.authenticate("google"))


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, ()=>`Server running on ${PORT}`);