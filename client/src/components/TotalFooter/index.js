import React from "react"
import "./style.css"
import { Row, Col } from "reactstrap";

function TotalFooter(props){
  return(
    <div>
      <footer className="footer">
      <Row className="pay-footer">
        <Col xs="8">
        <button onClick={()=>props.pay()} className="btn btn-success">Pay</button>
        </Col>
        <Col xs="4">{props.total}</Col>
      </Row>
      </footer>
    </div>
  )
}

export default TotalFooter;