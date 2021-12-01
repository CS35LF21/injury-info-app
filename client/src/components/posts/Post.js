import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    maxWidth: 745
  }
});

// const handleEdit = () => {
//     history.push(`/blog/post/update/${post._id}`);
//  };

//  const handleDelete = () => {
//     deletePost(post._id, history);
//  };


const Post = ({ post }) => {
   const classes = useStyles();
   return (
    
<Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            This is some filler text for what will eventually be not filler text.
            This should be replaced by either an image of some kind or possibly a snippet
            of the contents of the page.
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <Button 
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleEdit}
        >
          Edit
        </Button>
        <Button 
            size="small"
            color="secondary"
            variant="outlined"
            onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions> */}
    </Card>

   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;