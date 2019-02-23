const bcrypt = require("bcrypt-nodejs");
const LocalStrat = require("passport-local");

module.exports = (req, res, next) => {
  let User = req.user;
  const LocalStrat = require("passport-local");
  passport.use(
    "local-signup",
    new LocalStrategy({
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    })
  );
  function foo(req, username, password, done) {
    var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    User.findOne({
      where: {
        username: username
      }
    }).then(function(user) {
      if (user) {
        return done(null, false, {
          message: "That username is already taken"
        });
      } else {
        var userPassword = generateHash(password);
        var data = {
          
          password: userPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname
        };

        User.create(data).then(function(newUser, created) {
          if (!newUser) {
            return done(null, false);
          }

          if (newUser) {
            return done(null, newUser);
          }
        });
      }
    });
  }
};
