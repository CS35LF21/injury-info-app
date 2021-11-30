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
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a >Sass</a>
              </li>
              <li>
                <a >Components</a>
              </li>
              <li>
                <a >JavaScript</a>
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
            <Link to="/index" style={{fontFamily: "monospace",}, {paddingRight: "50px"}} className="col blue-text">
              Index
            </Link>
            <Link to="/" style={{fontFamily: "monospace",}, {paddingLeft: "0px"}, {paddingRight: "10px"}} className="col center blue-text">
              Home
            </Link>
            <form action="index" method = "GET" className="right"style={{fontFamily: "monospace",}, {paddingLeft: "0px"}, {paddingRight: "150px"}}>
              <input
                type="text"
                name="query"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                value={this.state.websiteUrl}
                onChange={this.changeUrl}
              />
              <button onClick={this.submitForm} disabled={!this.state.isValid}>
                Search
              </button>
            </form>

            <Link to="/login" style={{fontFamily: "monospace",}, {paddingRight: "50px"}} className="col right blue-text">
              Login
            </Link>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
