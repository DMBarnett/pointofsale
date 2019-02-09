import React, { Component } from "react";
import  {Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import "./style.css"
import API from "../../utils/API"

class NewEmployee extends Component{
  state={
    Uname:"",
    currUsers:[],
    password:"",
    first:"",
    last:"",
    firstExists:false,
    lastExists:false,
    UnameExists:false,
    manager: false,
  }

  componentDidMount(){
    this.loadEmps()
  }

  loadEmps = ()=>{
    API.getEmployees().then(res=>{
      const working = res.data
      this.setState({
        currUsers:working
      })
    })
  }

  handleChange = event =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  createEmp=()=>{
    let first = this.state.first;
    let last = this.state.last;
    let uName= this.state.Uname
    const passed = {
      first:first,
      last:last,
      uName:uName,
      pword:this.state.password,
      manager:this.state.manager
    }
    const Unames = this.state.currUsers.map(x=>x.username);
    if(Unames.indexOf(passed.uName)<0){
      this.dbUser(passed);
    }
  }

  dbUser(passed){
    API.createEmployee(passed).then(ret=>{
      this.loadEmps();
      this.setState({
        first:"",
        last:"",
        Uname:"",
        password:"",
      })
    })
  }

  render(){
    return(
      <div>
        <Row>
          <Col>
            <h1> New Employee</h1>
            <Form onSubmit={this.createEmp}>
              <FormGroup>
                <Label>Username</Label>
                <Input value={this.state.Uname} id="Uname" type="string" onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>First Name</Label>
                <Input value={this.state.first} id="first" type="string" onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input value={this.state.last} id="last" type="string" onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input value={this.state.password} id="password" type="password" onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label>Manager Status</Label>
                <select className="custom-select" id="manager" value={this.state.manager} onChange={this.handleChange}>
                  <option value="false" selected>Associate</option>
                  <option value="true">Manager</option>
                </select>              
              </FormGroup>
              <button className="btn btn-primary">Submit</button>
            </Form>
          </Col>
        </Row>
        {this.state.errorUser && 
          <div className="alert alert-danger">
            <h1>This works</h1>
          </div>
        }
      </div>
    )
  }
}

export default NewEmployee;