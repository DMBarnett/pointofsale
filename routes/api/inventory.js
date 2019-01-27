const express = require("express");
const router = express.Router();
const db = require("../../models")

router.post("/", (req,res)=>{
  const newQuantity = req.body.pass
  db.Item.update({
    quantity:newQuantity.quantity
  },{where:{id:newQuantity.id}})
    .then(ret=>{
      res.json(ret);
    })
})


module.exports = router;