const express = require("express");
const router = express.Router();
const db = require("../../models")


router.put("/", (req, res)=>{
  //need to change if to check if set is in DB
  db.Category.findAll({}).then(ret=>{
    let groupIDList = [];
    groupIDList= ret.filter(x=>{
      return x.dataValues.abbreviation=== req.body.pass.category
    })
    if(groupIDList[0].dataValues.abbreviation===req.body.pass.category){
      db.Item.findAll({
        where: {
          category: req.body.pass.category,
          name:req.body.pass.name,
        }
      }).then(ret=>res.json(ret))
    }else{
      const setDoesntExist = {
        setNotReal: true
      }
      res.json(setDoesntExist)
    }
  })
})

module.exports = router;