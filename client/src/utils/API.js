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
  },
  getHistory: function(){
    return axios.get("/api/history");
  },
  updateInventory: function(passed){
    return axios.post("/api/inventory", {pass:passed})
  },
  deleteItem: function(passed){
    return axios.delete(`/api/items/${passed}`);
  },
  getEmployees: function(){
    return axios.get("/user/employees");
  },
  createEmployee: function(passed){
    return axios.post("/user/employees", {pass:passed});
  },
  createCust:function(passed){
    return axios.post("/api/customer", {pass:passed});
  },
  createNewSet:function(passed){
    return axios.post("/api/set", {pass:passed});
  },
  getAllCatas: function(){
    return axios.get("/tcg/setSearch");
  },
  updatePrices: function(passed){
    return axios.post("/tcg/priceUpdate", {pass:passed});
  }
}