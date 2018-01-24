/*
* @Author: Isha Potnis
* @Date:   2017-07-04 16:30:54
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2018-01-24 05:28:59
*/

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink, HashRouter } from "react-router-dom";

import Header from "./components/Header";
import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends React.Component {
   render() {
      return (
         <Router>
        <div>
          <h1>Roller Coaster with ReactJS</h1>
          <Header/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/root" component={Root}/>
            <Route path="/user" component={User}/>
          </div>
        </div>
      </Router>
      );
   }
}

render(<App/>,window.document.getElementById("app"));