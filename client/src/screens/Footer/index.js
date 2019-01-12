import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

function Footer(){
  return(
    <div className="footer-fixed">
      <Row>
        <Col md="3" sm="6">
        <h5>A DMBarnett website </h5>
        </Col>
        <Col md="3" sm="6">
        <h3>Point of Sale</h3>
        </Col>
        <Col md="3" sm="6">
        </Col>
        <Col md="3" sm="6">
        </Col>
      </Row>
    </div>
  )
}

export default Footer;