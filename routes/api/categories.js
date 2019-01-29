const db = require("../../models");


module.exports = function(app){
  app.get("/api/categories", (req, res)=>{
    db.Category.findAll({})
      .then(resp=>{
        res.json(resp)
      })
  })
}