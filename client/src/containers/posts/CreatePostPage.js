import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import PostForm from "../../components/posts/PostForm";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";

const CreatePostPage = ({ errors, createPost, loading, history }) => {
   const [post, setPost] = useState({
     title: "",
     body: "",
     errors: {},
   });
   const [content, setContent] = useState("");

   const mdeChange = useCallback((content) => {
     setContent(content);
   }, []);

   useEffect(() => {
      setPost(post => {
         return { ...post, errors };
      });
   }, [errors]);

   const handleChange = (e) => {
    //  console.log("change");
     setPost({
       ...post,
       [e.target.id]: e.target.value,
     });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     post.body = content;
     const { title, body } = post;
     console.log({ title, body });
     createPost({ title, body }, history);
   };

   return (
      <PostForm
         loading={loading}
         post={post}
         onChange={handleChange}
         mdeChange={mdeChange}
        //  onBlur={handleBlur}
         onSubmit={handleSubmit}
      />
   );
};

const mapStateToProps = state => ({
   loading: state.post.postLoading,
   errors: state.errors
});

CreatePostPage.propTypes = {
   createPost: PropTypes.func.isRequired,
   errors: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired
};

export default connect(
   mapStateToProps,
   { createPost }
)(CreatePostPage);
