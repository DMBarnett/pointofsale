import React from "react";
import "./style.css";
import Header from "../Header";
import {Container, Row, Col, } from "reactstrap"

function Manager(props){
  return(
    <div>
      {/* <Header /> */}
      <Container>
        <Row>
          <Col className="sidebar" xs="2">
            <div id="wrapper">
              <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                  <li class="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                  </li>
                  <li>
                      <a href="#">Dashboard</a>
                  </li>
                  <li>
                      <a href="#">Shortcuts</a>
                  </li>
                  <li>
                      <a href="#">Overview</a>
                  </li>
                  <li>
                      <a href="#">Events</a>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#">Services</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Manager