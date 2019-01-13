import React from "react";
import "./style.css"
import {Container, Row, Col, Button, Navbar, Nav, NavItem, NavLink,} from "reactstrap"

function User(props){
  const test = [{name:"test1"}, {name:"test2"}];
  return (
    <div>
      <Container>
        <Row>
          <Col className="inputArea" xs="12" sm="6">
            <Row>
              <Navbar className="nav-pills">
                <Nav>
                  {test.map(category =>
                    <li className="nav-item">
                      <Button className="navButtons">{category.name}</Button>
                    </li>
                  )}
                </Nav>
              </Navbar>
            </Row>
          </Col>
          <Col className="workingArea" xs="12" sm="6">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default User;