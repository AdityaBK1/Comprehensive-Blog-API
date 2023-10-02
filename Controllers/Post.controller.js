const express=require('express');
const router = express.Router();
const Post=require("../Models/Post_Schema.js");
const validationPost=require("../Middleware/Postvalidation.js");


router.post('/posts', validationPost,async (req, res) => {
    try {
      const { id,title, content, category_id } = req.body;
  
      const post = new Post({
        id,
        title,
        content,
        category_id,
      });
  
      await post.save();
  
      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/posts', async (req, res) => {
    try {
      
      const posts = await Post.find();
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findOne({id:postId}).populate('category_id');
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  router.put('/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content } = req.body;
  
      // Find the blog post by ID
      const post = await Post.findOne({id:postId});
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Update the blog post
      post.title = title;
      post.content = content;
  
      // Save the updated post to the database
      await post.save();
  
      res.json(post); // Respond with the updated post
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  router.delete('/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
  
      // Find and delete the blog post by ID
      const deletedPost = await Post.findOneAndDelete({id:postId});
  
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      res.json(deletedPost); // Respond with the deleted post
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;