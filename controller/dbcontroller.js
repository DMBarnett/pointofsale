const db = require("../models");

module.exports = {
  findAllCatas: (req, res)=>{
    db.Category.find(req.query)
      .then(resp => res.json(resp))
      .catch(err => res.json(err))
  }
}