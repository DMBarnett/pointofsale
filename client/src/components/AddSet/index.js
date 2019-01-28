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
    const currentSetAbbs=this.state.currSets.map(x=>x.abbreviation);
    const currentSetNames=this.state.currSets.map(x=>x.name);
    const working = {
      name:this.state.name,
      abb:this.state.abbreviation,
    }
    const allCats = []
    if(currentSetAbbs.indexOf(working.abb)<0 && currentSetNames.indexOf(working.name)){
      API.getAllCatas().then(res=>{
        console.log(res)
        allCats = res.data.results.map(x=>x.name)
      })
      API.createNewSet(working).then(res=>{
        console.log(res);
      })
    }
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