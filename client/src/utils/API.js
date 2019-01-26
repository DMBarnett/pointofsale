import axios from "axios"

export default {
  getCategories: function(){
    return axios.get("/api/categories");
  },
  getItems: function(){
    return axios.get("/api/items");
  },
  getItemsPerCategory: function(abb){
    return axios.get(`/api/items/${abb}`)
  },
  getUserList: function(passed){
    return axios.get(`/user/lookup/:${passed}`)
  },
  getCustomerList: function(){
    return axios.get("/user/lookup");
  },
  useCredit: function(passed){
    return axios.put("/user/credit/", {id:passed.id,newCredit:passed.newCredit})
  },
  sellItems: function(passed){
    return axios.put("/api/items/", {pass:passed});
  },
  checkIfExists: function(passed){
    console.log("checkifexits in API")
    console.log(passed);
    return axios.put("/api/manager", {pass:passed});
  },
  checkIfCardReal: function(cardData){
    const first = {
      "sort": "name",
      "limit": 100,
      "offset": 0,
      "filters": [
        { "name": "ProductName", "values": [ cardData.name ] }
      ]    
    }
    const pass = {
      pass:cardData,
      first:first
    }
    return axios.post("/tcg/cardSearch", pass);
  }
}

//https://cors-anywhere.herokuapp.com/https://api.tcgplayer.com/v1.20.0/catalog/categories/1/search

//curl --include --request GET --header "Accept: application/json" --header "Authorization: bearer ZGpiKz1ALzW3aESj_Y1QIRWGVyX7iTKs0t16uAGGfnCmCx_klBszZpdhjjhAajkuCWqPfxZMe6HVmgrgi2OJJenBXyXEYojEMHntGSSzqaMEjokpFwWTpiYnA6TdKRhkCs0XZmM__Re7I9_xL4LXYC9OuG_73lW0p1qH5GbnEv-k5NwuYnZp3a0IPFMhhBdpAtVbAiqmT81fghbVz6uorvS-btfBTKI9kigDatZlc5KH1CsPKe_EdXaEwnmYkAodggLvBttxFJ1UUFeWXc9fB1KzUSdFDYRDoxNXuFOIdpqKHc1aQk4XnxthJvWkQXnlK4aoeA" 'http://api.tcgplayer.com/v1.20.0/catalog/categories'