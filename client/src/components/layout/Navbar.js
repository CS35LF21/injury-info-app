import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  submitForm = () => {
    const { websiteUrl } = this.state;
    console.log("Website URL", websiteUrl);
  };

  render() {
    return (
	<div className="navbar-fixed" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
        <nav className="z-depth-0">
          <div className="nav-wrapper white" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
		<li style={{paddingLeft:"250px"}}>
                    <Link to="/" style={{fontFamily: "monospace"}, {  color: "#2196F3"}}>Home</Link>
              </li>
		<li style={{paddingLeft:"50px"}}>
                  <Link to="/index" style={{fontFamily: "monospace"}, {  color: "#2196F3"}}>Index</Link>
              </li>
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
            <form action="index" method = "GET" className="right"style={{fontFamily: "monospace"}, {paddingLeft: "0px"}, {paddingRight: "80px"}}>
              <input
                type="text"
                name="query"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                value={this.state.websiteUrl}
                onChange={this.changeUrl}
              />
		<button style={{
			    background: "#378ed0",
			    color: "white",
			    fontSize: "17px",
			    border: "1px solid grey",
			    borderLeft: "none", /* Prevent double borders */
			    cursor: "pointer"}}
			onClick={this.submitForm} disabled={!this.state.isValid}>
                Search
              </button>
            </form>

            <Link to="/login" style={{fontFamily: "monospace",}, {paddingRight: "50px"}} className="col right blue-text">
              Login
            </Link>
              <Link to="/login" style={{fontFamily: "monospace",}, {paddingLeft: "0px",}, {paddingRight: "50px"}} className="col right blue-text">
              Account
            </Link>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
