const express = require("express");
const router = express.Router();
const axios = require("axios")
const db = require("../../models")

router.post("/", (req,res)=>{
  db.Category.create({
    name:req.body.pass.name,
    abbreviation:req.body.pass.abb
  }).then(ret=>res.json(ret))
})

module.exports = router;
