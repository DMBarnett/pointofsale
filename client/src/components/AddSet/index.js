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

  createSet=(e)=>{
    e.preventDefault();
    const currentSetAbbs=this.state.currSets.map(x=>x.abbreviation);
    const currentSetNames=this.state.currSets.map(x=>x.name);
    const working = {
      name:this.state.name,
      abb:this.state.abbreviation,
      groupID:0,
    }
    let allCats = []
    if(currentSetAbbs.indexOf(working.abb)<0 && currentSetNames.indexOf(working.name)){
      API.getAllCatas().then(res=>{
        console.log(res.data)
        allCats = res.data.map(x=>x.name);
        let tester = res.data.filter(x=>x.abbreviation===working.abb)
        working[groupID] = res.data.filter(x=>x.abbreviation===working.abb).groupID
        console.log(working);
        if(tester.length === 1){
          API.createNewSet(working).then(res=>{
          })
        }
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