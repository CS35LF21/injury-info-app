import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      title: this.state.title,
      content: this.state.content
    };
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
  <div className="container">
    <div style={{ marginTop: "4rem" }} className="row">
      <div className="col s8 offset-s2">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>New Post</b>
          </h4>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.title}
              error={errors.title}
              id="title"
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s12">
            <SimpleMDE 
              onChange={this.onChange}
              value={this.state.content} 
              error={errors.content}
              id="content"
                />
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
  }
}
export default Login;