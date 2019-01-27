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
    cardName:"",
    setID:"",
    quantity:0,
    checkSetStatus: false
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


  nextStep =(input, newCard)=>{
    console.log(input);
    if(input.data.length && input.data[0].name){
      //This needs to check if card exist
      this.setState({
        cardAlreadyExists:true,
        cardName:"",
        setID:"",
        quantity:0
      })
    }else{
      console.log(input.data);
      console.log("uhoh")
      API.checkIfCardReal(newCard).then(ret=>{
        console.log(ret)
          if(ret.data.length){
            this.setState({
              createCardSuccess:true,
              cardName:"",
              setID:"",
              quantity:0
            })
          }else{
            this.setState({
              createCardFailure:true,
              cardName:"",
              setID:"",
              quantity:0
            });
          }
      });
    }
  }

  createCard=(e)=>{
    e.preventDefault();
    let fixer = this.state.cardName.replace(/[\u2019]/g, "'")
    console.log(fixer)
    const newCard = {
      name:fixer,
      category:this.state.setID,
      quantity: this.state.quantity,
      price:0.00,
    }
    API.checkIfExists(newCard).then(ret=>{
      if("setNotReal" in ret.data){
        console.log("Faking it")
        this.setState({
          checkSetStatus: true,
          cardName:"",
          setID:"",
          quantity:0
        })
      }else{
        this.nextStep(ret, newCard);
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
              {this.state.switchScreen.addC && <Row>
                <Col>
                  <Form onSubmit={()=>this.createCard()}>
                    <FormGroup>
                      <Label for="cardName">Card Name</Label>
                      <Input id="cardName" onChange={this.handleChange} type="string" value={this.state.cardName} name="cardName" placeholder="Enter card name here" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="setID">Set abbreviation, three letters</Label>
                      <Input id="setID" onChange={this.handleChange} type="string" value={this.state.setID} name="setID" placeholder="Enter set abbreviation here" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="quantity">Number of Cards</Label>
                      <Input id="quantity" onChange={this.handleChange} type="string" value={this.state.quantity} name="quantity" placeholder="Enter quantity here" />
                    </FormGroup>
                    <button className="btn btn-primary" onClick={(event)=>this.createCard(event)}>Add Card</button>
                  </Form>
                </Col>
              </Row>}
            </Col>
          </Row>
        </Container>
        {this.state.createCardFailure && <h1>createCardFailure</h1>/*popup says card couldnt be created*/}
        {this.state.checkSetStatus && <h1>Set Doesn't Exist</h1>/*popup says set not found in local db*/}
        {this.state.createCardSuccess && <h1>createCardSuccess</h1>/*popup says card created successfully*/}
        {this.state.cardAlreadyExists && <h1>cardAlreadyExists</h1>/*popup says card already exists*/}
      </div>
    )
  }
}

export default Manager;