import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";
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
    maxWidth: 345
  }
});


const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   const classes = useStyles();
   return (

<Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CardActions are just a flexbox component that wraps the children in
          8px of padding and 8px horizontal padding between children.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Primary
        </Button>
        <Button size="small" color="secondary">
          Secondary
        </Button>
      </CardActions>
    </Card>

   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;