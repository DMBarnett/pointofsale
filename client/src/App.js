import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./screens/Header";
import Login from "./screens/Login";
import Footer from "./screens/Footer"
import './App.css';

function App () {

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Login}/>

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  
}

export default App;
