import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import PostForm from "../../components/posts/PostForm";
import { connect } from "react-redux";
import { getPostByID, updatePost } from "../../actions/postActions";

const UpdatePostPage = ({ errors, updatePost, currentPost, getPostByID, loading, match, history }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
//    comments: [],
    errors: {},
  });
  const [content, setContent] = useState("init");

  const mdeChange = useCallback((content) => {
    setContent(content);
  }, []);

  // updating the local state of post with the received post data
  useEffect(() => {
    setPost((post) => ({
      title: currentPost.title,
      body: currentPost.body,
//      comments: currentPost.comments,
      errors: { ...post.errors },
    }));
    console.log(currentPost.body);
    setContent(currentPost.body);
  }, [currentPost]);

  useEffect(() => {
    setPost((post) => {
      return { ...post, errors };
    });
  }, [errors]);
  //    useEffect(() => {
  //       setPost(post => {
  //          return { ...post, errors };
  //       });
  //    }, [errors]);

  const handleChange = (e) => {
    //  console.log("change");
    setPost({
      ...post,
      [e.target.id]: e.target.value,
    });
  };

  //    const handleBlur = e => {
  //       const { name, value } = e.target;
  //       const error = { ...post.errors, ...Validate(name, value).errors };
  //       setPost({ ...post, errors: { ...error } });
  //    };


  const handleSubmit = (e) => {
    e.preventDefault();
    //   setPost({
    //     ...post,
    //     e.target.body:
    //   });
    post.body = content;
    const { title, body } = post;
    console.log({ title, body });
    updatePost(currentPost._id, { title, body }, history);
  };

  // to ensure that the post is loaded otherwise we would make uncontrolled form access error
  const isPostLoaded = () => {
    return post.title || post.body || Object.keys(post.errors).length > 0;
  };

  return isPostLoaded() ? (
    <PostForm
       loading={loading}
       post={post}
       content={content}
       onChange={handleChange}
       mdeChange={mdeChange}
       onSubmit={handleSubmit}
    />
 ) : (
    <div />
 );

};

const mapStateToProps = (state) => ({
  currentPost: state.post.post,
  loading: state.post.postLoading,
  errors: state.errors,
});

UpdatePostPage.propTypes = {
   currentPost: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   getPostByID: PropTypes.func.isRequired,
   updatePost: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostByID, updatePost }
)(UpdatePostPage);
