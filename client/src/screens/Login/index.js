import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./style.css"

function Login(){
  return (
  <div className="fullspan">
    <Container fluid className="login-area">
      <Row className="login-row">
        <Col xs="0" sm="3" lg="4" className="left-img">
          
        </Col>
        <Col xs="12" sm="9" lg="4" className="login-forms">
          <h1>Sign in to Urza's Point Of Sale</h1>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input id="username" type="string" name="username" placeholder="Enter your username"/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="string" name="username" placeholder="Enter your username"/>
            </FormGroup>
            <Button>Login</Button>
            <p>New user? Sign up here</p>
            <Button>Sign Up</Button>
          </Form>
        </Col>
        <Col xs="0" lg="4" className="right-img">
          
        </Col>
      </Row>
    </Container>
  </div>)
}

export default Login;