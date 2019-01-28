import React, { Component} from "react";
import  {Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import "./style.css";
import API from "../../utils/API"

class NewCustomer extends Component{
  state = {
    currCustomers:[],
    name:"",
    credit:0.00,
  }

  handleChange = event =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  componentDidMount(){
    this.loadCustomers()
  }

  loadCustomers=()=>{
    API.getCustomerList().then(res=>{
      this.setState({
        currCustomers:res.data
      })
      console.log(res)
    })
  }

  createUser=()=>{
    console.log(this.state)
    const names = this.state.currCustomers.map(x=>x.name);
    const passed = {
      name:this.state.name,
      credit:this.state.credit
    }
    if(names.indexOf(this.state.name)<0){
      this.newCust(passed);
    }
  }

  newCust=(passed)=>{
    API.createCust(passed).then(res=>{
      console.log(res);
      this.setState({
        name:"",
        credit:0.00
      })
    })
  }

  render(){
    return(
      <div>
        <Row>
          <Col>
            <h1> New Customer</h1>
            <Form onSubmit={this.createUser}>
              <FormGroup>
                <Label>Customer Name</Label>
                <Input id="name" onChange={this.handleChange} value={this.state.name} type="string"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Store Credit</Label>
                <Input id="credit" onChange={this.handleChange} value={this.state.credit} type="number" step="0.01"></Input>
              </FormGroup>
              <button className="btn btn-primary">Submit</button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewCustomer;