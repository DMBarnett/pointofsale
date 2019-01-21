import React, { Component } from "react";
import "./style.css"
import {Container, Row, Col, Navbar, Nav} from "reactstrap"
import NavButton from "../../components/Navbuttons";
import ItemButton from "../../components/Itembutton";
import API from "../../utils/API";
import BillOfSale from "../../components/BillOfSale";
import TotalFooter from "../../components/TotalFooter";

class User extends Component {
  state = {
    test: [{name:"test1", id:0}, {name:"test2", id:1}],
    active: 0,
    categoriesForDisplay: [],
    itemsForDisplay:[],
    saleItems:[],
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
      this.setState({
        categoriesForDisplay:res.data
      })
    })
  }

  deleteItem=id=>{
    const forDeletion = this.state.forSale.map(item=>{
      return item.id;
    }).indexOf(id)
    console.log(forDeletion);
  }

  navClick=(id, abb)=>{
    let targetID = id;
    let targetABB = abb;
    API.getItemsPerCategory(targetABB).then(res=>{
      this.setState({
        active:targetID,
        itemsForDisplay:res.data
      });
      console.log(this.state.itemsForDisplay)
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

    if(tester.length>=1){
      newItem.quantity = tester[0].quantity+1;
      updatedSaleItems.find(card=>card.id===newItem.id).quantity = newItem.quantity;
      this.setState({
        saleItems:updatedSaleItems
      })
      console.log(this.state.saleItems)

    }else{

      updatedSaleItems.push(newItem);
      this.setState({
        saleItems:updatedSaleItems
      })
      console.log(this.state.saleItems)
    }
    //This needs to track items in the sale matrix as objects, so multiples dont fill up the screen
    //Works as intended, much longer than it needs to be, could be cleaned up if time allows
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
                {this.state.saleItems.map(item=>(
                  <BillOfSale key={item.id} forSale={item} deleteItem={this.deleteItem} />
                ))}
              <TotalFooter totalSale={this.state.saleItems} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default User;