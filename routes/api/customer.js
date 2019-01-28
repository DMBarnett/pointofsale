const express = require("express");
const router = express.Router();
const db = require("../../models");

router.post("/", (req,res)=>{
  db.Customer.create({
    name:req.body.pass.name,
    store_credit:req.body.pass.credit,
  })
})

module.exports = router;