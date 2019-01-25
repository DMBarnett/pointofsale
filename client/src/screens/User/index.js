import React, { Component } from "react";
import "./style.css"
import {Container, Row, Col, Navbar, Nav, Form, FormGroup, Label, Input} from "reactstrap"
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
    manager: true,
    customer: "",
    custCredit:0.00,
    possCust:[],
    choice: false,
    custSelect: false,
    chosenCust:{},
    finalSale: false,
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
    console.log(id)
    const forDeletion = this.state.saleItems.filter(item=>item.id===id);

    const position = this.state.saleItems.map(each=> each.id).indexOf(forDeletion[0].id);

    const newArr = this.state.saleItems;

    let targetItem=this.state.itemsForDisplay.map(function(x) {return x.id; }).indexOf(id);;
    let fixQuant = this.state.itemsForDisplay;
    fixQuant[targetItem].quantity++;

    let newTotal = this.state.total-forDeletion[0].price
    newArr.forEach(element => {
      if(element.id === forDeletion[0].id){
        element.quantity--;
        if(element.quantity<=0){
          newArr.splice(position,1);
        }
      }
    });
    this.setState({
      saleItems:newArr,
      itemsForDisplay:fixQuant,
      total:newTotal,
    })
  }

  navClick=(id, abb)=>{
    let targetID = id;
    let targetABB = abb;
    console.log(targetABB)
    API.getItemsPerCategory(targetABB).then(res=>{
      this.setState({
        active:targetID,
        itemsForDisplay:res.data
      });
    })
  };


  addToBill=(id, quant)=>{
    if(quant>0){
      const working = this.state.itemsForDisplay.filter(item=>{
        return item.id === id;
      })
      console.log(working[0]);
      const newItem = {
        quantity: 1,
        name: working[0].name,
        price: working[0].price,
        id: working[0].id,
      }

      const updatedSaleItems = this.state.saleItems;

      let tester = this.state.saleItems.filter(item=>item.id===newItem.id);
      let totalPrice = 0.00;
      let targetItem=this.state.itemsForDisplay.map(function(x) {return x.id; }).indexOf(working[0].id);;
      let newArr = this.state.itemsForDisplay;
      newArr[targetItem].quantity--;
      if(tester.length>=1){
        //This checks to make sure nothing in the saleItems array will become a duplicate
        newItem.quantity = tester[0].quantity+1;
        updatedSaleItems.find(card=>card.id===newItem.id).quantity = newItem.quantity;
        updatedSaleItems.forEach(item=>{
          totalPrice= totalPrice+(item.quantity*item.price) 
        })
        this.setState({
          saleItems:updatedSaleItems,
          total:totalPrice,
          itemsForDisplay:newArr,
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
    }
    //This needs to track items in the sale matrix as objects, so multiples dont fill up the screen
    //Works as intended, much longer than it needs to be, could be cleaned up if time allows
  }

  pay=(input)=>{
    const arrToRemove = this.state.saleItems;
    const price = this.state.total;
    switch(input){
      case "card":
        console.log("Your card has been charged");
        this.finalSale();
        break;
      case "cash":
        console.log("Your card has been charged");
        this.finalSale();
        break;
      default:
        return;
    }
  }

  finalSale=()=>{
    let foo ={}
    if(this.state.chosenCust.id){
      foo=this.state.chosenCust
    }else{
      foo={
        name: "cash",
        id:0
      }
    }

    const passed = {
      itemsSold: this.state.saleItems,
      customer: foo,
      itemsOwned:this.state.itemsForDisplay
    }
    console.log(passed);
    API.sellItems(passed).then(res=>{
      console.log(res);
      this.setState({
        active: 0,
        categoriesForDisplay: [],
        itemsForDisplay:[],
        saleItems:[],
        total:0,
        manager: false,
        customer: "",
        custCredit:0.00,
        possCust:[],
        choice: false,
        custSelect: false,
        chosenCust:{},
        finalSale: false,
      });
      this.loadCategories();
      console.log("reset after sale")
    })
  }

  handleChange = event =>{
    this.setState({
      customer: event.target.value
    })
  }

  lookup=()=>{
    const customer=this.state.customer;
    console.log(customer)
    API.getUserList(customer).then(res=>{
      console.log(res);
      this.setState({
        possCust:res.data,
        custSelect: true,
        choice: false,
      })
    })
  }

  applyCredit=()=>{
    let newTotal = this.state.total;
    let custCredit = this.state.custCredit
    if(newTotal > custCredit){
      newTotal = newTotal-custCredit;
      custCredit = 0;
    }else if(newTotal === custCredit){
      newTotal = 0;
      custCredit = 0;
    }else{
      custCredit = custCredit-newTotal;
      newTotal=0;
    }
    const working = {
      id:this.state.chosenCust.id,
      newCredit:custCredit,
    }
    API.useCredit(working).then(res=>{
      console.log(res)
      let foo = false;
      if(newTotal === 0){
        foo = true;
      }
      this.setState({
        custCredit:0.00,
        total:newTotal,
        choice: false,
        finalPrice: foo,
      })
    })
  }

  chooseCust=(input)=>{
    const storeCredit = this.state.possCust.filter(cust=>cust.id===input);
    this.setState({
      chosenCust: storeCredit[0],
      custSelect: false,
      choice: true,
      custCredit: storeCredit[0].store_credit,
    })
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
            <div id="store-credit-modal" className="modal fade" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">Credit Lookup Screen</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Row classID="search-customer">
                      <Col xs="8" >
                        <Form>
                          <FormGroup>
                            <Label for="customer-name">Customer Name</Label>
                            <Input onSubmit={()=>this.lookup()} onChange={this.handleChange} id="customer-name" placeholder="Enter name here"/>
                          </FormGroup>
                        </Form>
                      </Col>
                      <Col xs="4">
                        <button type="button" className="btn btn-danger lookup" onClick={()=>this.lookup()}>Lookup</button>
                      </Col>
                    </Row>
                    {this.state.custSelect &&
                      this.state.possCust.map(customer=>(
                        <Row className="customer-name-return">
                          <Col xs="7">
                            <h4>{customer.name}</h4>
                          </Col>
                          <Col xs="2">
                            <h5>${customer.store_credit}</h5>
                          </Col>
                          <Col xs="3">
                            <button className="btn btn-primary"data-id={customer.id} onClick={()=>this.chooseCust(customer.id)}>Select</button>
                          </Col>
                        </Row>
                      ))
                    }
                    {this.state.choice &&
                    <Row>
                      <Col xs="8">
                        <h4>Do you want to apply ${this.state.custCredit} to this order?</h4>
                      </Col>
                      <Col xs="4">
                        <button className="btn btn-success" onClick={()=>this.applyCredit()}>Apply</button>
                      </Col>
                    </Row>}
                    {this.state.finalPrice&&
                    <Row>
                      <Col xs="8">
                        <h5>The total is $0.00, do you want to finalize the sale?</h5>
                      </Col>
                      <Col xs="4">
                        <button onClick={()=>this.finalSale()} className="btn btn-success" data-dismiss="modal" type="button">Finalize</button>
                      </Col>
                    </Row>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div id="pay-modal" className="modal fade" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">Pay Screen</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Row>
                      <Col xs="4"><h4>${Math.round(this.state.total*100)/100}</h4></Col>
                      <Col xs="4">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.pay("card")}>Card</button>
                      </Col>
                      <Col xs="4">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.pay("cash")}>Cash</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
            <Col className="bottom-nav" xs="6"><TotalFooter total={this.state.total} pay={this.pay} /></Col>
          </Row>
        </Container> 
      </div>
    )
  }
}

export default User;