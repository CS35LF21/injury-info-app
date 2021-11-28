import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./post.scss";
import ReactMarkdown from 'react-markdown'


const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   return (
     <div className="container">
       <div style={{ marginTop: "4rem" }} className="row">
         <div className="col s8 offset-s2">
           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
               <ReactMarkdown>
                   {post.body}
               </ReactMarkdown>
           </div>
         </div>
       </div>
     </div>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
