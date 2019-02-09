const express = require("express");
const router = express.Router();
const db = require("../../models")

router.get("/", (req, res) =>{
    db.History.findAll({})
    .then(products => {
      res.json(products);
    })
  });

module.exports = router;