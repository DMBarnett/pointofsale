import React, { Component } from "react";
import "./style.css"
import {Container, Row, Col, Navbar, Nav} from "reactstrap"
import NavButton from "../../components/Navbuttons";
import ItemButton from "../../components/Itembutton";
import API from "../../utils/API";
import BillOfSale from "../../components/BillOfSale";
import TotalFooter from "../../components/TotalFooter";
import ActionRow from "../../components/ActionRow";

class User extends Component {
  state = {
    //test: [{name:"test1", id:0}, {name:"test2", id:1}],
    active: 0,
    categoriesForDisplay: [],
    itemsForDisplay:[],
    saleItems:[],
    total:0,
    manager: false,
  }

  componentDidMount(){
    console.log("Loaded");
    this.loadCategories();
  }

  loadCategories=()=>{
    //this will pull the categories for the navbar buttons in the server screen
    API.getCategories().then(res =>{
      this.setState({
        categoriesForDisplay:res.data
      })
    })
  }

  deleteItem=id=>{
    const forDeletion = this.state.saleItems.filter(item=>item.id===id);

    const position = this.state.saleItems.map(each=> each.id).indexOf(forDeletion[0].id);

    const newArr = this.state.saleItems;
    newArr.forEach(element => {
      if(element.id === forDeletion[0].id){
        element.quantity--;
        if(element.quantity<=0){
          newArr.splice(position,1);
        }
      }
    });
    this.setState({
      saleItems:newArr
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
    const working = this.state.itemsForDisplay.filter(item=>{
      return item.id === id;
    })

    const newItem = {
      quantity: 1,
      name: working[0].name,
      price: working[0].price,
      id: working[0].id,
    }

    const updatedSaleItems = this.state.saleItems;

    let tester = this.state.saleItems.filter(item=>item.id===newItem.id);
    let totalPrice = 0.00;
    if(tester.length>=1){
      //This checks to make sure nothing in the saleItems array will become a duplicate
      newItem.quantity = tester[0].quantity+1;
      updatedSaleItems.find(card=>card.id===newItem.id).quantity = newItem.quantity;
      updatedSaleItems.forEach(item=>{
        totalPrice= totalPrice+(item.quantity*item.price) 
      })
      this.setState({
        saleItems:updatedSaleItems,
        total:totalPrice
      })
    }else{
      updatedSaleItems.push(newItem);
      updatedSaleItems.forEach(item=>{
        totalPrice= totalPrice+(item.quantity*item.price)
      })
      this.setState({
        saleItems:updatedSaleItems,
        total:totalPrice,
        
      })
    }
    //This needs to track items in the sale matrix as objects, so multiples dont fill up the screen
    //Works as intended, much longer than it needs to be, could be cleaned up if time allows
  }

  pay=()=>{

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
                      <NavButton key={category.id} category={category} handleClick={this.navClick} active={this.state.active} />
                    ))}
                  </Nav>
                </Navbar>
              </Row>
              <Row className="inventory-screen">
                {this.state.itemsForDisplay.map(item =>(
                  <ItemButton key={item.id} handleClick={this.addToBill} item={item}/>
                ))}
              </Row>
            </Col>
            <Col className="workingArea" xs="12" sm="6">
              <Row className="items-BOS">
                <Col xs="3"><h4>Remove One</h4></Col>
                <Col xs="1"><h4>Quantity</h4></Col>
                <Col xs="6"><h4>Card Name</h4></Col>
                <Col xs="2"><h4>Price</h4></Col>
              </Row>
              {this.state.saleItems.map(item=>(
                <BillOfSale key={item.id} forSale={item} deleteItem={this.deleteItem} />
              ))}
            </Col>
          </Row>
          <Row className="serverArea footer-area">
            <Col className="bottom-nav" xs="6">
            <ActionRow isManager={this.state.manager}/>
            </Col>
            <Col className="bottom-nav" xs="6"><TotalFooter total={this.state.total} pay={this.pay} /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default User;