import React, { Component } from "react";
import { Link } from "react-router-dom";
import currentlyAuthenticated from "../auth/Login"
import {Route} from "react-router-dom"
class Footer extends Component {
  state = {
    websiteUrl: "",
    isValid: false
  };

  validateWebsiteUrl = websiteUrl => {
    return String(websiteUrl).toLowerCase();
  };

  changeUrl = e => {
    const { value } = e.target;
    const isValid = !value || this.validateWebsiteUrl(value);

    this.setState({
      websiteUrl: value,
      isValid
    });
  };

  submitForm = () => {
    const { websiteUrl } = this.state;
    console.log("Website URL", websiteUrl);
  };

  render() {
    return (
      <div className="foot-fixed" styel={{
        paddingBottom: "1px",
        verticalAlign: "bottom",
        bottom: "1px"
      }}>
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
            <Link to="/dashboard" style={{fontFamily: "monospace",}, {paddingRight: "50px"}} className="col blue-text">
              Dashboard
            </Link>
            <Link to="/" style={{fontFamily: "monospace",}, {paddingLeft: "0px"}, {paddingRight: "10px"}} className="col center blue-text">
              Home
            </Link>
            <Link to="/login" style={{fontFamily: "monospace",}, {paddingRight: "50px"}} className="col right blue-text">
              Login
            </Link>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Footer;
