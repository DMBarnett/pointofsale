const express = require("express");
const router = express.Router();
const axios = require("axios")
const db = require("../../models")

const header ={
  'Content-Type': 'application/json',
  'Authorization': "Bearer ZGpiKz1ALzW3aESj_Y1QIRWGVyX7iTKs0t16uAGGfnCmCx_klBszZpdhjjhAajkuCWqPfxZMe6HVmgrgi2OJJenBXyXEYojEMHntGSSzqaMEjokpFwWTpiYnA6TdKRhkCs0XZmM__Re7I9_xL4LXYC9OuG_73lW0p1qH5GbnEv-k5NwuYnZp3a0IPFMhhBdpAtVbAiqmT81fghbVz6uorvS-btfBTKI9kigDatZlc5KH1CsPKe_EdXaEwnmYkAodggLvBttxFJ1UUFeWXc9fB1KzUSdFDYRDoxNXuFOIdpqKHc1aQk4XnxthJvWkQXnlK4aoeA",
}


router.get("/", (req, res)=>{
  const config = {
    headers:header
  }
  axios.get("http://api.tcgplayer.com/v1.19.0/catalog/groups?categoryId=1&isSupplemental=false&limit=250", config).then(foo=>{
    res.json(foo.data.results);
  })
})

module.exports = router;