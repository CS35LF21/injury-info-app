import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Aches and pains</b> keeping you from your sport?
            </h4>
            <p className="flow-text grey-text text-darken-1">
              The one stop solution for getting back to your normal self
            </p>
            <br />
            <div className="col s12 center-align" style={{padding: "0em 0em 3em 0em"}}>
              <SearchBar
                value={this.state.value}
                placeholder={"What's bothering you?"}
                onChange={(newValue) => this.setState({ value: newValue })}
                onRequestSearch={() => console.log(this.state.value)}
                style={{
                  padding: "2px",
                }}
              />
            </div>

            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;