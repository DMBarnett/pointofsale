import React, { Component } from "react";
import "./style.css"
import {Container, Row, Col, Navbar, Nav, NavItem, NavLink,} from "reactstrap"
import NavButton from "../../components/Navbuttons";
import ItemButton from "../../components/Itembutton";
import API from "../../utils/API";

class User extends Component {
  state = {
    test: [{name:"test1", id:0}, {name:"test2", id:1}],
    active: 0,
    categoriesForDisplay: [],
    itemsForDisplay:[]
  }

  componentDidMount(){
    console.log("Loaded");
    this.loadCategories();
    console.log(this.state);
  }

  loadCategories=()=>{
    console.log("Finally")
    //this will pull the categories for the navbar buttons in the server screen
    API.getCategories().then(res =>{
      console.log("Sam");
      console.log(res.data);
      console.log("Max")
      this.setState({
        categoriesForDisplay:res.data
      })
      console.log(this.state.categoriesForDisplay);
    })
    
  }

  navClick=(id, abb)=>{
    let targetID = id;
    let targetABB = abb;
    API.getItemsPerCategory(targetABB).then(res=>{
      this.setState({
        active:targetID,
        itemsForDisplay:res.data
      });
    })
    
  };


  addToBill=id=>{

  }

  render(){
    return (
      <div className="orderScreen">
        <Container fluid>
          <Row className="serverArea">
            <Col className="inputArea" xs="12" sm="6">
              <Row className="navBarRow">
                <Navbar className="nav-pills">
                  <Nav>
                    {this.state.categoriesForDisplay.map(category =>(
                      <NavButton category={category} handleClick={this.navClick} active={this.state.active} />
                    ))}
                  </Nav>
                </Navbar>
              </Row>
              <Row className="inventory-screen">
                {this.state.itemsForDisplay.map(item =>(
                  <ItemButton handleClick={this.addToBill} item={item}/>
                ))}
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