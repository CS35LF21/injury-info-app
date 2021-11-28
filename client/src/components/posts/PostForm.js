import React, { Component, useCallback } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import PropTypes from "prop-types";

const PostForm = ({ post, content, onChange, mdeChange, loading, onSubmit }) => {
  const { title, errors } = post;
  return (
    <div className="container">
    <div style={{ marginTop: "4rem" }} className="row">
      <div className="col s8 offset-s2">
        <form noValidate onSubmit={onSubmit}>
          <div className="input-field col s12">
            <input
              onChange={onChange}
              value={title}
              error={errors.title}
              // onBlur={onBlur}
              id="title"
              placeholder="Title"
            />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field col s12">
            <SimpleMDE 
              onChange={mdeChange}
              value={content} 
              // error={errors.body}
              // onBlur={onBlur}
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
};

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PostForm;