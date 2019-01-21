const db = require("../../models");


module.exports = function(app){
  console.log("Hello world");
  app.get("/api/categories", (req, res)=>{
    console.log("test")
    db.Category.findAll({})
      .then(resp=>{
        // console.log(resp);
        // console.log("Rebecca")
        res.json(resp)
      })
  })
}