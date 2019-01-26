import React, { Component} from "react";
import  {Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import "./style.css"

class NewCustomer extends Component{
  state = {

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
                <Label>Customer Name</Label>
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

export default NewCustomer;