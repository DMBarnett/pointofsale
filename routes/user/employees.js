const router = require("express").Router();
const passport = require("passport");
const db = require("../../models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/", (req, res)=>{
  db.User.findAll({}).then(ret=>res.json(ret)).catch(err=>res.json(err))
})

router.post("/", (req, res)=>{
  console.log(req.body);
  console.log("working on it")
  db.User.create({
    first_name:req.body.pass.first,
    last_name:req.body.pass.last,
    username:req.body.pass.uName,
    manager:req.body.pass.manager,
    password:req.body.pass.pword
  })
  .then(ret=>res.json(ret))
  .catch(err=>res.json(err))
})

module.exports = router;