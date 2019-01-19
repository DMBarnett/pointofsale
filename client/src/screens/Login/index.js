import React, {Component} from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import axios from "axios";
import "./style.css"

class Login extends Component{
  state = {
    userName:"",
    password: "",
    loggedIn: false,
    reset:""
  };

  handleChange = event =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleLogin = event =>{
    event.preventDefault();
    axios.post("/user/login", {
      username: this.state.username,
      password: this.state.password
      }).then(resp=>{
        if(resp.status === 200){
          event.preventDefault();
          // console.log(resp)
          if(resp.data.manager){
            this.props.history.push("/MLogin");
          }else{
            this.props.history.push("/ULogin");
          }
          // console.log('hello');
        }
      })
  }

  render(){
    return (
      <div className="fullspan">
        <Container fluid className="login-area">
          <Row className="login-row">
            <Col xs="0" sm="3" lg="4" className="left-img">
              
            </Col>
            <Col xs="12" sm="9" lg="4" className="login-forms">
              <h1>Sign in to Urza's Point Of Sale</h1>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input onChange={this.handleChange} id="username" type="string" name="username" placeholder="Enter your username"/>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input onChange={this.handleChange} id="password" type="password" name="username" placeholder="Enter your username"/>
                </FormGroup>
                <Button onClick={this.handleLogin}>Login</Button>
                <p>New user? Sign up here</p>
                <Button >Sign Up</Button>
              </Form>
            </Col>
            <Col xs="0" lg="4" className="right-img">
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Login;