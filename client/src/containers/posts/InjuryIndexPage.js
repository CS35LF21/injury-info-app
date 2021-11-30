import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InjuryIndex from "../../components/layout/InjuryIndex";
import { getPosts } from "../../actions/postActions";

const InjuryIndexPage = ({
   auth,
   getPosts,
   match,
   posts
}) => {
   useEffect(() => {
       getPosts();
   }, [auth, getPosts, match]);

   return <InjuryIndex posts={posts} auth={auth} />;
};

const mapStateToProps = state => ({
   auth: state.auth,
   posts: state.post.posts,
});

InjuryIndexPage.propTypes = {
   posts: PropTypes.array.isRequired,
   auth: PropTypes.object.isRequired,
   getPosts: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPosts }

)(InjuryIndexPage);
