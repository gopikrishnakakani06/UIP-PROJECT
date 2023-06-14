const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router
.post('/getpost', async (req, res) => {
    try {
      let postcontent = await Post.getPost(req.body.User_id);
      res.send(postcontent)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createpost', async (req, res) => {
    try {
      let postcontent = await Post.createPost(req.body.User_id, req.body.PostContent);
      res.send(postcontent)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
  .post('/updatePost', async (req, res) => {
    try {
      let postcontent = await Post.updatePost(req.body.User_id, req.body.PostContent);
      res.send(postcontent)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletePost', async (req, res) => {
    try {
      let postcontent= await Post.deletePost(req.body.User_id);
      res.send(postcontent)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;