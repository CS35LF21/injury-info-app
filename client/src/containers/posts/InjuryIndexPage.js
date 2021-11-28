import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InjuryIndex from "../components/layout/InjuryIndex";
import { getPosts, getPostsByAuthor } from "../actions/postActions";

const InjuryIndexPage = ({
   isAuthenticated,
   getPostsByAuthor,
   getPosts,
   match,
   posts
}) => {
   useEffect(() => {
      isAuthenticated ? getPosts() : getPostsByAuthor(match.params.author);
   }, [isAuthenticated, getPosts, getPostsByAuthor, match]);

   return <Blog posts={posts} auth={isAuthenticated} />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   posts: state.post.posts
});

InjuryIndexPage.propTypes = {
   posts: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getPosts: PropTypes.func.isRequired,
   getPostsByAuthor: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostsByAuthor, getPosts }
)(InjuryIndexPage);
