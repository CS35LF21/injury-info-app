
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Post = require("../../models/Post");
const passport = require("passport");
const validatePostInput = require("../../validation/post");

router.get(
    "/",
    (req, res) => {
       Post.find({}, function(err, result) {
          if(err) {
            res.status(400).json({ id: "Error fetching post by id" })
          } else {
            res.status(200).json(result)
          }
       });
    }
 );
 
 router.get("/post/:id", (req, res) => {
    Post.find({ _id: req.params.id })
       .then(post => res.status(200).json(post))
       .catch(err => res.status(400).json({ id: "Error fetching post by id" }));
 });
 
 
//  router.get("/author/:author", (req, res) => {
//     Post.find({ author: req.params.author })
//        .then(posts => res.status(200).json(posts))
//        .catch(err =>
//           res
//              .status(400)
//              .json({ author: "Error fetching posts of specific author" })
//        );
//  });
 
 router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       if(req.user.role !== "Admin") {
          return res.send(403, {
             'status': 403,
             'code': 1,
             'message': 'You cannot perform this action as a non-admin'
          });
       }
       const author = req.user.user_name;
       const post = req.body;
       const { errors, isValid } = validatePostInput(post);
       if (!isValid) {
          return res.status(400).json(errors);
       }
       post.author = author;
       const newPost = new Post(post);
       newPost
          .save()
          .then(doc => res.json(doc))
          .catch(err => console.log({ create: "Error creating new post" }));
    }
 );

 router.patch(
    "/update/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      if(req.user.role !== "Admin") {
          return res.send(403, {
             'status': 403,
             'code': 1,
             'message': 'You cannot perform this action as a non-admin'
          });
       }
       console.log('inside patch 2');
       const author = req.user.user_name;
       const { errors, isValid } = validatePostInput(req.body);
       if (!isValid) {
          return res.status(400).json(errors);
       }
       console.log("Inside patch 3");
       const { title, body } = req.body;
       Post.findOneAndUpdate(
          { author, _id: req.params.id },
          { $set: { title, body } },
          { new: true }
       )
          .then(doc => res.status(200).json(doc))
          .catch(err =>
             res.status(400).json({ update: "Error updating existing post" })
          );
    }
 );

 router.patch(
   "/update/:id/addComment",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const author = req.user.user_name;
      const { comments } = req.body;
      var comment = comments.pop(-1);
      console.log(comment);
      comment = "Anonymous" + ": " + comment;
      comments.push(comment)
      Post.findOneAndUpdate(
         { _id: req.params.id },
         { $set: { comments } },
         { new: true }
      )
         .then(doc => res.status(200).json(doc))
         .catch(err =>
            res.status(400).json({ update: "Error adding comment to existing post" })
         );
   }
);

router.patch(
   "/update/:id/deleteComments",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      const author = req.user.user_name;
      const { comments } = req.body;
      var comment = comments.pop(-1);
      console.log(comment);
      comment = "Anonymous" + ": " + comment;
      comments.push(comment)
      Post.findOneAndUpdate(
         { _id: req.params.id },
         { $set: { comments } },
         { new: true }
      )
         .then(doc => res.status(200).json(doc))
         .catch(err =>
            res.status(400).json({ update: "Error adding comment to existing post" })
         );
   }
);
 
 router.delete(
    "/delete/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       if(req.user.role !== "Admin") {
          return res.send(403, {
             'status': 403,
             'code': 1,
             'message': 'You cannot perform this action as a non-admin'
          });
       }
       const author = req.user.user_name;
       Post.findOneAndDelete({ author, _id: req.params.id })
          .then(doc => res.status(200).json(doc))
          .catch(err =>
             res.status(400).json({ delete: "Error deleting a post" })
          );
    }
 );
 
 module.exports = router;