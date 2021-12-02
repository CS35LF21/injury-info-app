import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./post.scss";
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col, Button } from "react-bootstrap";
import useWindowDimensions from "../Window/Window"



const ViewPost = ({ post, auth, onDelete, onEdit, onNewComment }) => {
   var { height, width } = useWindowDimensions();
   height = height - 415
   var string1 = height.toString() + "px"
   return (
     <div className="container" style={{minHeight:string1}}>
       <div style={{ marginTop: "4rem" }} className="row">
         <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
               <ReactMarkdown>
                   {post.body}
               </ReactMarkdown>
            </div>

            {
               post.comments.map(comment=>{
                  return (
                     <h6 key={comment}>{comment}</h6>
                  )
               })
            }

           <form onSubmit={(e)=>{
               e.defaultPrevented();
               onNewComment("This is a new comment")
               console.log("This is a new comment")
            }}>
               <input type = 'text' placeholder = "Add a comment" />
            </form>

         </div>
       </div>
       {auth && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="primary"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button variant="secondary" onClick={onDelete}>
                     Delete
                  </Button>
               </Col>
            </Row>
         )}
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
