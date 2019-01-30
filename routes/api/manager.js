const express = require("express");
const router = express.Router();
const db = require("../../models")


router.put("/", (req, res)=>{
  console.log("Card Check")
  console.log(req.body);
  //need to change if to check if set is in DB
  db.Category.findAll({}).then(ret=>{
    let groupIDList = [];
    //console.log(res);
    let bar = ret;
    // console.log(typeof ret)
    console.log(Object.keys(bar))
    // console.log(ret[0].dataValues);

    groupIDList= ret.filter(x=>{
      console.log("inner test")
      console.log(x.dataValues.name)
      console.log(req.body.pass.category)
      return x.dataValues.name=== req.body.pass.category
    })
    console.log(groupIDList);
    //console.log(res.data)
    if(groupIDList.indexOf(req.body.pass.category)>=0){
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
      console.log("Doesnt exist")
      res.json(setDoesntExist)
    }
  })
})

module.exports = router;