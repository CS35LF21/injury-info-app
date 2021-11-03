const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");

const users = require("./routes/api/users");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// replacement for bodyparser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});