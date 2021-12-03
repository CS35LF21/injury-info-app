const { integerPropType } = require("@mui/utils");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CommentSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likeCount: {
    type: Number,
    default: 0
  },
});
module.exports = Comment = mongoose.model("comments", CommentSchema);