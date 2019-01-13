import React from "react";
import "./style.css";
import Header from "../Header";
import {Container, Row, Col, Button} from "reactstrap"

function Manager(props){
  return(
    <div>
      <Header />
      <Container>
        <Row className="workingArea">

        </Row>
        <Row className="inputArea">

        </Row>
      </Container>
    </div>
  )
}

export default Manager