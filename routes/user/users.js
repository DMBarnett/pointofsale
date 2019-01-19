const router = require("express").Router();
const passport = require("passport");
const db = require("../../models")
//Need to pull from ../models to do a db.Users.find to see if login is a users, and then if they are a manager


router.post("/login", 
  passport.authenticate("local"),
  (req, res)=>{
    console.log(req.body);
    db.User.findOne({
      where:{
        username:req.body.username,
      }
    }).then(function(returned){
      console.log(returned);
      if(returned.manager){
        const userlogin = {
          username: req.body.username,
          loggedIn: true,
          manager: true,
        }
        res.send(userlogin);
      }else{
        const userlogin = {
          username: req.body.username,
          loggedIn: true,
          manager: false,
        }
        res.send(userlogin);
      }
    })
  },
)

module.exports = router;