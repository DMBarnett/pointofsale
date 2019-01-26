import React, { Component } from "react";
import "./style.css";
import {Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import NewEmployee from "../../components/NewEmployee"
import NewCustomer from "../../components/NewCustomer"
import ManageC from "../../components/ManageC"
import AddSet from "../../components/AddSet"
import AddCard from "../../components/AddCard"
import UpdateInv from "../../components/UpdateInv"
import PurchaseHist from "../../components/PurchaseHist"
import API from "../../utils/API"


class Manager extends Component{
  state = {
    switchScreen:{
      newE:false,
      newC:false,
      manageC:false,
      addS:false,
      addC:false,
      inv:false,
      hist:false,
    },
    cardAlreadyExists:false,
    createCardFailure: false,
    createCardSuccess: false,
    cardReal: false,
    cardName:"",
    setID:"",
    quantity:0,
  }

  handleClick(input){
    const switchScreen = {
      newE:false,
      newC:false,
      manageC:false,
      addS:false,
      addC:false,
      inv:false,
      hist:false,
    }
    switchScreen[input] = true;
    this.setState({
      switchScreen
    })
  }

  createCard=(e)=>{
    e.preventDefault();
    const newCard = {
      name:this.state.cardName,
      category:this.state.setID,
      quantity: this.state.quantity,
      price:0.00,
    }
    API.checkIfExists(newCard).then(res=>{
      console.log(res)
      if(res.data.length && res.data[0].name){
        //This needs to check if card exist
        this.setState({
          cardAlreadyExists:true,
        })
      }else{
        console.log(res.data);
        const work = res.data
        API.checkIfCardReal(newCard).then(res=>{
          console.log(res)
          console.log(res.data)
        });
          //   if(res.){
        //     newCard.price = res.
        //     //need to find out where price comes back in res
        //     //then pass to createCard
        //     API.createCard(newCard).then(res=>{
        //       if(res.){
        //         //Check for success, then pass back to page 
        //         this.setState({
        //           createCardSuccess:true,
        //         })
        //       }else{
        //         //Pass back failure, tell user to check spelling or set
        //         this.setState({
        //           createCardFailure:true,
        //         })
        //       }
        //     }

        //     )
        //   }else{
        //     this.setState({
        //       cardReal: true,
        //     })
        //   }
        // })
      }
    })
  }

  handleChange = event =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
    return(
      <div className="fullscreen h-100 w-100">
        <Container fluid className="w-100">
          <Row className="fullScreen">
            <Col className="px-1 bg-light" xs="2">
              <div className="py-2 sticky-top flex-grow-1">
                  <div className="nav flex-sm-column">
                      <a href="#" className="nav-link d-none d-sm-inline" ><h3>Sidebar</h3></a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("newE")}>New Employee</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("newC")}>New Customer</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("manageC")}>Manage Customer</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("addS")}>Add Set</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("addC")}>Add Card</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("inv")}>Update inventory</a>
                      <a href="#" className="nav-link" onClick={()=>this.handleClick("hist")}>Purchase history</a>
                  </div>
              </div>
            </Col>
            <Col xs="10" className="working-area">
            {this.state.switchScreen.newE && <NewEmployee />}
            {this.state.switchScreen.newC && <NewCustomer />}
            {this.state.switchScreen.manageC && <ManageC />}
            {this.state.switchScreen.addS && <AddSet />}
            {this.state.switchScreen.inv && <UpdateInv />}
            {this.state.switchScreen.hist && <PurchaseHist />}
            {this.state.switchScreen.addC && 
            <Row>
            <Col>
              <Form onSubmit={()=>this.createCard()}>
                <FormGroup>
                  <Label for="cardName">Card Name</Label>
                  <Input id="cardName" onChange={this.handleChange} type="string" name="cardName" placeholder="Enter card name here" />
                </FormGroup>
                <FormGroup>
                  <Label for="setID">Set abbreviation, three letters</Label>
                  <Input id="setID" onChange={this.handleChange} type="string" name="setID" placeholder="Enter set abbreviation here" />
                </FormGroup>
                <FormGroup>
                <Label for="quantity">Number of Cards</Label>
                  <Input id="quantity" onChange={this.handleChange} type="string" name="quantity" placeholder="Enter quantity here" />
                </FormGroup>
                <button className="btn btn-primary" onClick={(event)=>this.createCard(event)}>Add Card</button>
              </Form>
            </Col>
          </Row>}
            </Col>
          </Row>
        </Container>
        {this.state.createCardFailure && <h1>createCardFailure</h1>/*popup says card couldnt be created*/}
        {this.state.createCardSuccess && <h1>createCardSuccess</h1>/*popup says card created successfully*/}
        {this.state.cardReal && <h1>cardReal</h1>/*popup says card isn't real and to check entry*/}
        {this.state.cardAlreadyExists && <h1>cardAlreadyExists</h1>/*popup says card already exists*/}
      </div>
    )
  }
}

export default Manager;