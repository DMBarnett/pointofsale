import React, { Component } from "react";
import  {Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import "./style.css"
import API from "../../utils/API"

class NewEmployee extends Component{
  state={
    name:"",
    currUsers:[]
  }

  componentDidMount(){
    API.getUserList().then(res=>{
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

  render(){
    return(
      <div>
        <Row>
          <Col>
            <h1> New Employee</h1>
            <Form>
              <FormGroup>
                <Label>Employee Name</Label>
                <Input id="name"></Input>
              </FormGroup>
              <FormGroup>
                <Label></Label>
                <Input></Input>
              </FormGroup>
              <button className="btn btn-primary"></button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewEmployee;