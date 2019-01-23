import React from "react"
import "./style.css"
import { Row, Col } from "reactstrap";

function TotalFooter(props){
  return(
    <div>
      <footer className="footer">
      <Row className="pay-footer">
        <Col xs="4">
        <button data-toggle="modal" data-target="#pay-modal" onClick={()=>props.pay()} className="btn btn-success">Pay</button>
        </Col>
        <Col xs="4">
          <a href="#" data-toggle="modal" data-target="#store-credit-modal" className="btn btn-success">Store Credit</a>
        </Col>
        <Col xs="4">{Math.round(props.total*100)/100}</Col>
      </Row>
      </footer>
    </div>
  )
}

export default TotalFooter;