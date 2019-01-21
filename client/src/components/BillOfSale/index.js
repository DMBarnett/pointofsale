import React from "react";
import { Col, Row } from "reactstrap";
import "./style.css";

function BillOfSale(props) {
  return (
    <div>
      <Row className="item-row">
        <Col xs="3"><button className="btn btn-block btn-danger" onClick={()=>props.deleteItem(props.forSale.id)}>Delete One</button></Col>
        <Col className="items-BOS" xs="1"><h6>{props.forSale.quantity}</h6></Col>
        <Col className="items-BOS" xs="6"><h6>{props.forSale.name}</h6></Col>
        <Col className="items-BOS" xs="2"><h6>{Math.round((props.forSale.quantity * props.forSale.price)*100)/100}</h6></Col>
      </Row>
    </div>
  );
}

export default BillOfSale;
