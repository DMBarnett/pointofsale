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

      this.setState({
        inventory:ret.data
      })
    })
  }

  callAPI(){
    let work = this.state.inventory.map(x=>x.tcgID);
    API.updatePrices(work).then(res=>{
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