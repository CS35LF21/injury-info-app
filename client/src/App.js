import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminRoute from "./components/private-route/AdminRoute";
import Dashboard from "./components/dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NotFound from "./components/layout/NotFound";




import CreatePostPage from "./containers/posts/CreatePostPage";
import ViewPostPage from "./containers/posts/ViewPostPage";
import InjuryIndexPage from "./containers/posts/InjuryIndexPage";
import UpdatePostPage from "./containers/posts/UpdatePostPage";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <AdminRoute exact path="/create" component={CreatePostPage} />
              <Route exact path="/page/:id" component={ViewPostPage} />
              <Route exact path="/index" component={InjuryIndexPage} />
              <AdminRoute exact path="/page/update/:id" component={UpdatePostPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;