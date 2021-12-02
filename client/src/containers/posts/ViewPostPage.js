import React, { useEffect } from "react";
import ViewPost from "../../components/posts/ViewPost";
import { updatePost, deletePost, getPostByID } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ViewPostPage = ({
   auth,
   post,
   match,
   history,
   getPostByID,
   deletePost
}) => {
   useEffect(() => {
      getPostByID(match.params.id);
   }, [match, getPostByID]);

   const handleEdit = () => {
      history.push(`/page/update/${post._id}`);
   };

   const handleDelete = () => {
      deletePost(post._id, history);
   };

   const handleNewComment = (e) => {
      e.preventDefault();
      console.log("handleNewComment");
      //   setPost({
      //     ...post,
      //     e.target.body:
      //   });
      var comments = post.comments;
      comments.push(e)
      console.log({ comments });
      updatePost(post._id, { comments }, history);
    };

   if (Object.keys(post).length === 0) return <div />; 
   return (
      <ViewPost
         post={post}
         auth={auth}
         onDelete={handleDelete}
         onEdit={handleEdit}
         onNewComment={handleNewComment}
      />
   );
};

const mapStateToProps = state => ({
   auth: state.auth.isAuthenticated,
   post: state.post.post
});

ViewPostPage.propTypes = {
   auth: PropTypes.bool.isRequired,
   post: PropTypes.object.isRequired,
   getPostByID: PropTypes.func.isRequired,
   deletePost: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostByID, deletePost }
)(ViewPostPage);
