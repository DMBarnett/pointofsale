const express = require("express");
const router = express.Router();
const db = require("../../models")


router.put("/", (req, res)=>{
  console.log("Card Check")
  console.log(req.body);
  //need to change if to check if set is in DB
  db.Category.findAll({}).then(res=>{
    const groupIDList = [];
    groupIDList= res.data.filter(x=>x.abbreviation=== req.body.pass.category)
    console.log(groupIDList);
    console.log(res.data)
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