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

  renderDate=input=>{
    let foo = input.split("-");
    let day = foo[2].substring(0,2)
    let final = foo[1]+"/"+day+"/"+foo[0]
    return final;
  }

  render(){
    return(
      <div>
        <Row>
          <Col className="history-col">
            <Row>
              <Col xs="2">
                <h4>Card name</h4>
              </Col>
              <Col xs="2">
                <h4>Quantity</h4>
              </Col>
              <Col xs="2">
                <h4>Price Each</h4>
              </Col>
              <Col xs="2">
                <h4>Price Total</h4>
              </Col>
              <Col xs="2">
                <h4>Customer Name</h4>
              </Col>
              <Col xs="2">
                <h4>Sale Date</h4>
              </Col>
            </Row>
            <br/>
            {this.state.history.map(each=>(
              <div className="rowOfSales">
              <Row key={each.id}>
              <Col xs="2">
                <h6>{each.cardName}</h6>
              </Col>
              <Col xs="2">
                <h6>{each.quantity}</h6>
              </Col>
              <Col xs="2">
                <h6>{parseFloat(each.price_each).toFixed(2)}</h6>
              </Col>
              <Col xs="2">
                <h6>{parseFloat(Math.round((each.price_each*each.quantity)*100)/100).toFixed(2)}</h6>
              </Col>
              <Col xs="2">
                <h6>{each.customerName}</h6>
              </Col>  
              <Col xs="2">
                <h6>{this.renderDate(each.createdAt)}</h6>
              </Col>
            </Row>
            </div>
            ))}
          </Col>
        </Row>
      </div>
    )
  }
}

export default PurchaseHist;