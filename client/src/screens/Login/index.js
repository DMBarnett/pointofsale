import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./style.css"

function Login(){
  return (
  <div>
    <Container fluid className="login-area">
      <Row className="login-row">
        <Col xs="12" sm="9" md="4">
          <p>
            All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills.
            Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States: If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it. If after such Reconsideration two thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law. But in all such Cases the Votes of both Houses shall be determined by Yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively. If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law.
            Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States; and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill.
          </p>
        </Col>
        <Col xs="12" sm="9" md="4">
          <h1>Sign in to Urza's Point Of Sale</h1>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input id="username" />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="12" sm="9" md="4">
          
        </Col>
      </Row>
    </Container>
  </div>)
}

export default Login;