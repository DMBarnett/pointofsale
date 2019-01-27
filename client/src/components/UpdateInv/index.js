import React, { Component } from "react";
import  {Row, Col, Form, FormGroup, Input } from "reactstrap"
import "./style.css"
import API from "../../utils/API"


class UpdateInv extends Component{
  state={
    inventory:[],
    warningQPopup:false,
    warningDPopup:false
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

  updateInv=(id)=>{
    //Need to call API and update inventory here
    const passing = {
      id:id,
      quantity: this.state.id
    }
    console.log()
    API.updateInventory(passing).then(res=>{
      if(res.status===200){
        this.loadInventory();
      }else{
      //This should display error on item
      this.setState({
        warningQPopup: true,
      })
      }
    })
  }

  handleChange = event =>{
    if(event.target.value<event.target.dataset.max){
      this.setState({
        ...this.state, [event.target.id]: event.target.value
      })
      console.log(this.state)
    }else{
      this.setState()
    }
  }

  deleteItem=id=>{
    console.log(id)
    API.deleteItem(id).then(res=>{
      if(res.status===200){
        this.loadInventory();
      }else{
        this.setState({
          warningDPopup:true
        })
      }
    })
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
                    <div className="input-group">
                      <input data-max={each.quantity} data-current="0" onChange={this.handleChange} id={each.id} className="form-control width100" type="number"/>
                      <span className="input-group-btn">
                        <button className="btn btn-success">Submit</button>
                      </span>
                    </div>
                  </Form>
                </Col>  
                <Col xs="2">
                  <button className="btn btn-warning" id={each.id} onClick={()=>this.deleteItem(each.id)}>Delete</button>
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