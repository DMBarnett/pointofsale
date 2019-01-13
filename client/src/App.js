import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Manager from "./screens/Manager";
import User from "./screens/User"
import './App.css';

class App extends Component {
  state ={

  }


  render(){  
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/MLogin" component={Manager}/>
            <Route exact path="/ULogin" component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
