import React, { useState } from "react";
import PropTypes from "prop-types";
import {Typography, TextField} from "@material-ui/core";
// import "./post.scss";
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col, Button } from "react-bootstrap";
import useWindowDimensions from "../../components/Window/Window"

//import useStyles from './styles';

const ViewComments = ({ post, onNewComment }) => {
   var { height, width } = useWindowDimensions();
   height = height - 415
   var string1 = height.toString() + "px"

//   const classes = useStyles();
   const [comments, setComments] = useState(post?.comments);
   const [comment, setComment] = useState("")

   const handleClick = () => {
      const finalComment = `${comment}`;
      onNewComment(finalComment);
   };
//<div className="col s12" style={{ paddingLeft: "11.250px" }}>
//       <div style={{ marginTop: "4rem" }} className="row">
//</div>

//   if (comments.length !== 0) {
   return (
      <div>
         <div>
            <div>
               <Typography gutterBottom variant = "h6">Comments</Typography>
               {comments.map((c, i) => (
                  <Typography key={i} gutterBottom variant = "subtitle1">
                     {c}
                  </Typography>
               ))}
            </div>
            <div style = {{width: "70%"}}>
                  <Typography gutterBottom variant = "h6">Write a comment</Typography>
                  <TextField
                     fullWidth
                     rows={4}
                     variant = "outlined"
                     label = "Comment"
                     multiline
                     value={comment}
                     onChange={(e)=>setComment(e.target.value)}
                  />
                  <Button style={{marginTop: "10px"}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                     Comment
                  </Button>
            </div>
         </div>
      </div>
   );
//   }
   return (
      <div className="container" style={{minHeight:string1}}>
       <div style={{ marginTop: "4rem" }} className="row">
         <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
               There are no comments
            </div>
         </div>
       </div>
     </div>
   );
};

ViewComments.propTypes = {
   post: PropTypes.object.isRequired,
};

export default ViewComments;