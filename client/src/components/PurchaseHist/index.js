import React, { Component } from "react";
import  {Row, Col } from "reactstrap"
import "./style.css"
import API from "../../utils/API"

class PurchaseHist extends Component{
  state ={
    history:[]
  }

  componentDidMount(){
    this.loadHistory();
  }

  loadHistory=()=>{
    API.getHistory().then(res=>{
      const work = res.data;
      this.setState({
        history:work
      })
    })
  }

  render(){
    return(
      <div>
        <Row>
          <Col className="history-col">
            <Row>
              <Col xs="2">
                <h1>Card name</h1>
              </Col>
              <Col xs="2">
                <h1>Quantity</h1>
              </Col>
              <Col xs="2">
                <h1>Price Each</h1>
              </Col>
              <Col xs="2">
                <h1>Customer Name</h1>
              </Col>
              <Col xs="2">
                <h1>Sale Date</h1>
              </Col>
              <Col xs="2">
                <h1>Last Col</h1>
              </Col>
            </Row>
            {this.state.history.map(each=>{
              //Create rows here
            })}
          </Col>
        </Row>
      </div>
    )
  }
}

export default PurchaseHist;