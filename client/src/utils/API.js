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
  }
}