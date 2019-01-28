import React, { Component} from "react";
import  {Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import "./style.css";
import API from "../../utils/API"


class AddSet extends Component{
  state={
    name:"",
    abbreviation:"",
    currSets:[]
  }

  componentDidMount(){
    this.getSets();
  }

  getSets=()=>{
    API.getCategories().then(res=>{
      console.log(res)
      this.setState({
        currSets:res.data
      })
    })
  }

  createSet=()=>{
    
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
              <h1>Add Set</h1>
              <Form onSubmit={this.createSet}>
                <FormGroup>
                  <Label>Set Name</Label>
                  <Input id="name" onChange={this.handleChange} value={this.state.name} type="string"></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Abbreviation</Label>
                  <Input id="abbreviation" onChange={this.handleChange} value={this.state.abbreviation} type="string" maxLength="3"></Input>
                </FormGroup>
                <button className="btn btn-primary">Submit</button>
              </Form>
            </Col>
          </Row>
      </div>
    )
  }
}

export default AddSet;