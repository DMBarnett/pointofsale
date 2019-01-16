const router = require("express").Router();
const passport = require("passport");
//Need to pull from ../models to do a db.Users.find to see if login is a users, and then if they are a manager


router.post("/login", 
  passport.authenticate("local"),
  (req, res)=>{
    console.log(req.body);
    const userlogin = {
      username: req.body.username,
      loggedIn: true,
    }
    res.send(userlogin);
  },
)

module.exports = router;