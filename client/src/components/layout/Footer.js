import React, { Component } from "react";
import { Link } from "react-router-dom";
import currentlyAuthenticated from "../auth/Login"
import {Route} from "react-router-dom"
class Footer extends Component {
  state = {
    websiteUrl: "",
    isValid: false
  };

  render() {
    return (
	<footer class="page-footer teal lighten-1">
          <div class="container">
              <div class="row">
		      <Link to="/" style={{
			  
			  fontFamily: "monospace",
		      }}
		      className="col s12 brand-logo black-text">
		    <i className="material-icons">enhanced_encryption</i>
		</Link>
				  <div class="col l6 s12">
		  
		<Link to="/">    
                <h5 class="white-text">The Injury Index</h5>
		</Link>
				      <p class="grey-text text-lighten-4" style={{margin:"0"}}>By</p>
				      <p class="grey-text text-lighten-4" style={{margin:"0"}}>Dylan Wilbur</p>
				      <p class="grey-text text-lighten-4" style={{margin:"0"}}>Keaton Heisterman</p>
				      <p class="grey-text text-lighten-4"style={{margin:"0"}}>Jai Parera</p>
				      <p class="grey-text text-lighten-4"style={{margin:"0"}}>& Ethan Matus</p>
              </div>
              <div class="col l4 offset-l2 s12">
                  <h6 class="white-text" style={{marginTop: "25px"}} >Navigate</h6>
                <ul>
                  <li><Link to="/login" class="grey-text text-lighten-3">Login</Link></li>
                    <li><Link to="/index?" class="grey-text text-lighten-3" >Search</Link></li>
                  <li><Link to="/about" class="grey-text text-lighten-3" >About</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright ">
            <div class="container">
		2021 The Injury Index 
            <a class="grey-text text-lighten-4 right" href="https://github.com/CS35LF21/injury-info-app">Checkout Our Repo</a>
            </div>
          </div>
        </footer>
    );
  }
}
export default Footer;
