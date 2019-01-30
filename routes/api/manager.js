const express = require("express");
const router = express.Router();
const db = require("../../models")


router.put("/", (req, res)=>{
  console.log("Card Check")
  console.log(req.body);
  //need to change if to check if set is in DB
  db.Category.findAll({}).then(res=>{
    const groupIDList = [];
    console.log(res);
    let bar = res;
    console.log(typeof res)
    console.log(Object.keys(bar))
    console.log(res.dataValues);
    groupIDList= res.dataValues.filter(x=>x.name=== req.body.pass.category)
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