import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
   media: {
      borderRadius: "20px",
      objectFit: 'cover',
      width: '100%',
      maxHeight: '600px',
   
   },
   card: {
      display: "flex",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
         flexWrap: "wrap",
         flexDirection: "column",
      },
   },
   section: {
      borderRadius: '20px',
      margin: '10px',
      flex: 1,
   },
   commentsOuterContainer: {
      justifyContent: "space-between" //display: "flex", 
   },
   commentsInnerContainer: {
      height: "200px", overflowY: "auto", marginRight: "30px"
   }
}));