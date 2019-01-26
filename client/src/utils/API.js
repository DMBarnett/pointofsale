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
  checkifCardReal: function(cardData){
    //return axios.
    return "Hello";
  },
  getHistory: function(){
    return axios.get("/api/history");
  }
}