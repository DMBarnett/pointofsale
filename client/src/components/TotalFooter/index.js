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
        <Col xs="4">{Math.round(props.total*100)/100}</Col>
      </Row>
      </footer>
    </div>
  )
}

export default TotalFooter;