import React, { Component } from "react";

import Project from "./pages/Project";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/" component = {Home}/>
          <Route exact path = "/project" component = {Project}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
