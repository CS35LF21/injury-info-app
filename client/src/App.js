import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Routes><Route exact path="/" component={Landing} /></Routes>
          <Routes><Route exact path="/register" component={Register} /></Routes>
          <Routes><Route exact path="/login" component={Login} /></Routes>
        </div>
      </Router>
    );
  }
}
export default App;