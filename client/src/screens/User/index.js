import React, { Component } from "react";
import "./style.css"
import {Container, Row, Col, Button, Navbar, Nav, NavItem, NavLink,} from "reactstrap"
import NavButton from "../../components/Navbuttons";

class User extends Component {
  state = {
    test: [{name:"test1", id:0}, {name:"test2", id:1}],
    active: 0
  }

  navClick=id=>{
    let targetID = id;
    this.setState({active:targetID});
  };



  render(){
    return (
      <div className="orderScreen">
        <Container>
          <Row>
            <Col className="inputArea" xs="12" sm="6">
              <Row className="navBarRow">
                <Navbar className="nav-pills">
                  <Nav>
                    {this.state.test.map(category =>(
                      <NavButton category={category} handleClick={this.navClick} active={this.state.active} />
                    ))}
                  </Nav>
                </Navbar>
              </Row>
              <Row className="inventory-screen">
                <h1>Filler</h1>
              </Row>
            </Col>
            <Col className="workingArea" xs="12" sm="6">
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default User;