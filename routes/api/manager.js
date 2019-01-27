const express = require("express");
const router = express.Router();
const db = require("../../models")

const groupIDList=["DOM"]

router.put("/", (req, res)=>{
  console.log("Card Check")
  console.log(req.body);
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

module.exports = router;