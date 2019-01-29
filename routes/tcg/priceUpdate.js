const express = require("express");
const router = express.Router();
const axios = require("axios")
const db = require("../../models")

const header ={
  'Content-Type': 'application/json',
  'Authorization': "Bearer ZGpiKz1ALzW3aESj_Y1QIRWGVyX7iTKs0t16uAGGfnCmCx_klBszZpdhjjhAajkuCWqPfxZMe6HVmgrgi2OJJenBXyXEYojEMHntGSSzqaMEjokpFwWTpiYnA6TdKRhkCs0XZmM__Re7I9_xL4LXYC9OuG_73lW0p1qH5GbnEv-k5NwuYnZp3a0IPFMhhBdpAtVbAiqmT81fghbVz6uorvS-btfBTKI9kigDatZlc5KH1CsPKe_EdXaEwnmYkAodggLvBttxFJ1UUFeWXc9fB1KzUSdFDYRDoxNXuFOIdpqKHc1aQk4XnxthJvWkQXnlK4aoeA",
}

router.post("/", (req, res)=>{
  let strArr=req.body.pass.map(String).join(",");
  const config = {
    headers:header
  }
  axios.get("https://api.tcgplayer.com/v1.20.0/pricing/product/"+strArr, config).then(ret=>{
    let hold = ret.data.results.map(x=>{
      if(x.subTypeName === "Normal"){
        return x;
      }
    })
    hold = hold.filter(x=>x!=null)
    hold.forEach(e => {
      db.Item.update({
        price:e.midPrice
      }, {where:{tcgID:e.productId}})
    });
  }).catch(err=>console.log(err))
})

module.exports= router;