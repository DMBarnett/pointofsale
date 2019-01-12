import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

function Footer(){
  return(
    <div className="footer-fixed">
      <Container >
        <Row>
          <Col size="md-3 sm-6">
          <h3>DMBarnett</h3>
          </Col>
          <Col size="md-3 sm-6">
          <h3>Point of Sale</h3>
          </Col>
          <Col size="md-3 sm-6">
          </Col>
          <Col size="md-3 sm-6">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;