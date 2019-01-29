const express = require("express");
const router = express.Router();
const axios = require("axios")
const db = require("../../models")

const header ={
  'Content-Type': 'application/json',
  'Authorization': "Bearer ZGpiKz1ALzW3aESj_Y1QIRWGVyX7iTKs0t16uAGGfnCmCx_klBszZpdhjjhAajkuCWqPfxZMe6HVmgrgi2OJJenBXyXEYojEMHntGSSzqaMEjokpFwWTpiYnA6TdKRhkCs0XZmM__Re7I9_xL4LXYC9OuG_73lW0p1qH5GbnEv-k5NwuYnZp3a0IPFMhhBdpAtVbAiqmT81fghbVz6uorvS-btfBTKI9kigDatZlc5KH1CsPKe_EdXaEwnmYkAodggLvBttxFJ1UUFeWXc9fB1KzUSdFDYRDoxNXuFOIdpqKHc1aQk4XnxthJvWkQXnlK4aoeA",
}


console.log("hello wario")

router.post("/", (req, res)=>{
  console.log("hello mikey")
  console.log(req.body)
  let strArr=req.body.pass.map(String).join(",");
  console.log(strArr)
  console.log(typeof strArr)
  const config = {
    headers:header
  }
  console.log("https://api.tcgplayer.com/v1.20.0/pricing/product/"+strArr)
  //axios.get("https://api.tcgplayer.com/v1.20.0/pricing/product/"+element, config).then(ret=>{
  axios.get("https://api.tcgplayer.com/v1.20.0/pricing/product/"+strArr, config).then(ret=>{
    console.log(ret)
  }).catch(err=>console.log(err))
})

module.exports= router;