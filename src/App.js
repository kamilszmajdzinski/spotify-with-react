import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import LogIn from "./components/LogIn/index";
import Dashboard from "./components/Dashboard";
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
           <Route exact path = '/' component = {LogIn} />
           <Route exact path = '/dashboard' component = {Dashboard} />
        </main>
        
      </div>
    );
  }
}


export default App;