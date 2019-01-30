import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API"

class AddCard extends Component{
  state={
    inventory:[]
  }

  componentDidMount(){
    this.loadInventory();
  }

  loadInventory=()=>{
    API.getItems().then(ret=>{
      console.log(ret);
      console.log("Update Inventory, pull from db")
      this.setState({
        inventory:ret.data
      })
    })
  }

  callAPI(){
    console.log(this.state.inventory)
    let work = this.state.inventory.map(x=>x.tcgID);
    console.log(work)
    API.updatePrices(work).then(res=>{
      console.log(res)
    })
  }

  render(){
    return(
      <div>
        <a href="#" role="button" className="btn btn-lg btn-success upper" onClick={()=>this.callAPI()}>Update Prices</a>
      </div>
    ) 
  }
}

export default AddCard