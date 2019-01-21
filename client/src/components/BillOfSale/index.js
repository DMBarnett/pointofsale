import React from "react";
import { Col, Row } from "reactstrap";
import "./style.css";

function BillOfSale(props) {
  return (
    <div>
      <Row>
        <Col xs="2">{props.forSale.quantity}</Col>
        <Col xs="8">{props.forSale.name}</Col>
        <Col xs="2">{props.forSale.quantity * props.forSale.price}</Col>
      </Row>
    </div>
  );
}

export default BillOfSale;
