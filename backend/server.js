const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts")

const app = express();
const port = process.env.PORT || 5000;

// replacement for bodyparser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.json());

const uri = require('./config/keys').mongoURI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/posts/", posts);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
