import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InjuryIndex from "../../components/layout/InjuryIndex";
import { getPosts } from "../../actions/postActions";

const InjuryIndexPage = ({
   isAuthenticated,
   getPosts,
   match,
   posts
}) => {
   useEffect(() => {
       getPosts();
   }, [isAuthenticated, getPosts, match]);

   return <InjuryIndex posts={posts} auth={isAuthenticated} />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   posts: state.post.posts
});

InjuryIndexPage.propTypes = {
   posts: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getPosts: PropTypes.func.isRequired,
};

export default connect(
   mapStateToProps,
   { getPosts }

)(InjuryIndexPage);
