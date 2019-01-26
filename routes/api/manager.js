const express = require("express");
const router = express.Router();

const db = require("../../models")

router.put("/", (req, res)=>{
  console.log("Card Check")
  console.log(req.body)
  db.Item.findAll({
    where: {
      category: req.body.pass.category,
      name:req.body.pass.name,
    }
  }).then(ret=>res.json(ret))
})

module.exports = router;