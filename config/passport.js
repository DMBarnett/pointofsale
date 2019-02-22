const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "username"
  },
  function(username, password, done){
    db.User.findOne({
      where:{username:username}
    }).then(ret=>{
      if(!ret){
        return done(null, false, {
          message: "Incorrect username"
        })
      }else if(!ret.validPassword(password)){
        return done(null, false, {
          message: "Incorrect Password"
        });
      }
      return done(null, ret);
    });
  }
));

passport.serializeUser(function(user, callback){
  callback(null, user)
})
passport.deserializeUser(function(foo, callback){
  callback(null, foo)
})

module.exports = passport;