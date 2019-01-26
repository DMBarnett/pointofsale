const express = require("express");
const router = express.Router();
const db = require("../../models")

router.get("/", (req, res) =>{
    db.History.findAll({})
    .then(products => {
      console.log("history tester");
      res.json(products);
    })
  });

module.exports = router;