const router = require("express").Router();
const passport = require("passport");
const db = require("../../models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

router.get("/:passed", (req,res)=>{
  console.log("user passed");

  let foo = "%" + req.params.passed.substr(1)+"%";

  console.log(foo);
  db.Customer.findAll({
    where:{
      name:{
        [Op.like]:foo
      }
    }
  }).then(ret=>{
    res.json(ret);
  })
})

router.get("/", (req, res)=>{
  db.Customer.findAll({})
    .then(foo =>{
      res.json(foo)
    })
})

router.put("/", (req, res)=>{
  db.Customer.update({
    store_credit:req.body.newCredit
  },{where:{id:req.body.id}})
    .then(ret=>res.json(ret))
})

module.exports = router;