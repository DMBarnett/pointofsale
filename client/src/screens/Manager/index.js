import React, { Component } from "react";
import "./style.css";
import {Container, Row, Col, } from "reactstrap"
import NewEmployee from "../../components/NewEmployee"
import NewCustomer from "../../components/NewCustomer"
import ManageC from "../../components/ManageC"
import AddSet from "../../components/AddSet"
import AddCard from "../../components/AddCard"
import UpdateInv from "../../components/UpdateInv"
import PurchaseHist from "../../components/PurchaseHist"


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
            {this.state.switchScreen.addC && <AddCard />}
            {this.state.switchScreen.inv && <UpdateInv />}
            {this.state.switchScreen.hist && <PurchaseHist />}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Manager;