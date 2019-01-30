const express = require("express");
const router = express.Router();
const axios = require("axios")
const db = require("../../models")
const Sequelize = require('sequelize');
const safeJsonStringify = require('safe-json-stringify');

const header ={
  'Content-Type': 'application/json',
  'Authorization': "Bearer ZGpiKz1ALzW3aESj_Y1QIRWGVyX7iTKs0t16uAGGfnCmCx_klBszZpdhjjhAajkuCWqPfxZMe6HVmgrgi2OJJenBXyXEYojEMHntGSSzqaMEjokpFwWTpiYnA6TdKRhkCs0XZmM__Re7I9_xL4LXYC9OuG_73lW0p1qH5GbnEv-k5NwuYnZp3a0IPFMhhBdpAtVbAiqmT81fghbVz6uorvS-btfBTKI9kigDatZlc5KH1CsPKe_EdXaEwnmYkAodggLvBttxFJ1UUFeWXc9fB1KzUSdFDYRDoxNXuFOIdpqKHc1aQk4XnxthJvWkQXnlK4aoeA",
}

const groupIDs={
  DOM:2199
}
//db.Category.findAll({}).then(res=>)
router.post("/", (req, res)=>{
  console.log("prices 123")
  console.log(req.body)
  let currPrice = 0.00;
  const config = {
    headers:header
  }
  const target=groupIDs[req.body.pass.category]
  axios.post("https://api.tcgplayer.com/v1.20.0/catalog/categories/1/search", req.body.first, config).then(foo=>{
    console.log(foo.data)
    if(foo.data.results.length === 0){
      console.log("cardNotFound")
      const cardNotFound ={
        cardNotReal: true
      }
      res.json(cardNotFound);
    }else{
      foo.data.results.forEach(element=>{
        console.log("opt search")
        console.log(element);
        axios.get("http://api.tcgplayer.com/v1.19.0/catalog/products/"+element, config).then(ret=>{
          console.log(ret.data.results)

          if(ret.data.results[0].groupId === target && ret.data.results[0].name === req.body.pass.name){
            axios.get("https://api.tcgplayer.com/v1.20.0/pricing/product/"+element, config).then(ret=>{
              currPrice = ret.data.results[0].midPrice;
              
              db.Item.create({
                name:req.body.pass.name,
                price:currPrice,
                category:req.body.pass.category,
                quantity:req.body.pass.quantity,
                tcgID:element,
              }).then(ret=>{
                //console.log(ret);
                res.json(ret);
              })
            })
          }else{

          }
        }).catch(err=>console.log(err))
      })
    }
  }).catch(err=>{
    console.log(err);
  })
})

module.exports = router;

//https://api.tcgplayer.com/v1.20.0/catalog/categories/1/search
