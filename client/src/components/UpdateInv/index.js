import React, { Component } from "react";
import  {Row, Col, Form, FormGroup, Input } from "reactstrap"
import "./style.css"
import API from "../../utils/API"


class UpdateInv extends Component{
  state={
    inventory:[],

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

  updateInv=input=>{
    //Need to call API and update inventory here
    //API.updateInventory(input).then(res=>{
      // if(res.status===200){
      //   this.loadInventory();
      // }else{
      // This should display error on item
      // }
    //})
  }

  render(){
    return(
      <div>
        <Row>
          <Col>
          <Row>
              <Col xs="2">
                <h4>Card name: Set</h4>
              </Col>
              <Col xs="2">
                <h4>Price</h4>
              </Col>
              <Col xs="2">
                <h4>Quantity</h4>
              </Col>
              <Col xs="2">
                <h4>Edit Quantity</h4>
              </Col>
              <Col xs="2">
                <h4>Submit</h4>
              </Col>
              <Col xs="2">
                <h4>Remove Item</h4>
              </Col>
            </Row>
            <br/>
            {this.state.inventory.map(each=>(
              <div className="inventoryRows">
              <Row key={each.id}>
              <Col xs="2">
                <h6>{each.name}:{each.category}</h6>
              </Col>
              <Col xs="2">
                <h6>{parseFloat(each.price).toFixed(2)}</h6>
              </Col>
              <Col xs="2">
                <h6>{each.quantity}</h6>
              </Col>
              <Col xs="4">
                <Form>
                  <div class="input-group">
                    <input class="form-control width100" />
                    <span class="input-group-btn">
                      <button class="btn btn-success" onClick={()=>this.updateInv(each.id)}>Submit</button>
                    </span>
                  </div>
                </Form>
              </Col>  
              <Col xs="2">
                <h6>Delete Button</h6>
              </Col>
            </Row>
            </div>
            ))}
          </Col>
        </Row>
      </div>
    )
  }
}

export default UpdateInv;