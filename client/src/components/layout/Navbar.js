import { fontFamily } from "@mui/system";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "../Button/Button"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Navbar extends Component {
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

  submitForm = e => {
    if(!this.state.isValid) {
      e.preventDefault();
    } else {
      const { websiteUrl } = this.state;
    }
  };
  render() {
    console.log(this.props.auth.isAuthenticated);
    return (
	<div className="navbar-fixed" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
        <nav className="z-depth-0">
          <div className="nav-wrapper white" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
		<li style={{paddingLeft:"50px"}}>
		    <p></p>
		    </li>
		<li>
      <Link to="/" style={{fontFamily: "monospace"}, {  color: "#26a69a" }}><b>Home</b></Link>
		</li>
		<li style={{paddingLeft:"50px"}}>
		    <p></p>
		</li>
  	<li>
      <Link to="/index" style={{fontFamily: "monospace"}, {  color: "#26a69a"}}><b>Index</b></Link>
    </li>
    <li style={{paddingLeft:"50px"}}>
		    <p></p>
		</li>
    {this.props.auth.isAuthenticated ? (
      [
            <li>
              <Link  to="/login" style={{fontFamily: "monospace"}, {  color: "#26a69a"}}><b>Profile</b></Link>
            </li>,
            <li style={{paddingLeft:"50px"}}>
              <p></p>
              </li>
      ]
         ) : (
           [

		<li>
      <Link to="/login" className="right"style={{fontFamily: "monospace"}, {  color: "#26a69a"}}><b>Login</b></Link>
		</li>,
		<li style={{paddingLeft:"50px"}}>
		    <p></p>
		    </li>
           ]
         )}
    </ul>
            
    <Link
      to="/"
      style={{
        fontFamily: "monospace",
      }}
      className="col s5 brand-logo center black-text"
    >
      <i className="material-icons">enhanced_encryption</i>
      The Injury Index
    </Link>
            <form action="index"
                  method = "GET"
                  className="right"
                  style={{fontFamily: "monospace"}, {paddingLeft: "0px"}, {paddingRight: "30px"}}
                  onSubmit={this.submitForm} 
                  >
              <input
                type="text"
                name="query"
                placeholder="Search..."
                  style={{
		      marginLeft: "0px",
		      marginRight: "10px",
		      paddingLeft: "0px",
		      paddingRight: "10px",
                      width: "200px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                }}
                value={this.state.websiteUrl}
                onChange={this.changeUrl}
              />
            </form>
	    <ul id="nav-mobile" className="right hide-on-med-and-down">
		<li style={{paddingLeft:"0px"}}>
		    <p></p>
		    </li>
	    </ul>
            
            
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Navbar);