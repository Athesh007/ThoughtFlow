import { Router } from 'express';
import { Post } from '../schemas/schema.js';
const router = Router();

// Get - /posts
router.get('/', async (req, res) => {
  const posts = await Post.find()
  res.json(posts);
});

//post - /posts
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description, author: req.user._id });
  await newPost.save();
  res.status(201).json({ message: 'Post created successfully' });
});

//get - post/:id
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.body.id).populate('author');
  res.json(post);
});

//put - post/:id
router.put('/:id', async (req, res) => {
  const post = await Post.findById(req.body.id);
  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  post.set(req.body);
  await post.save();
  res.json({ message: 'Post updated successfully' });
});

//delete - posts/:id
router.delete('/:id', async (req, res) => {
  const post = await Post.findById(req.body.id);
  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  await post.deleteOne();
  res.json({ message: 'Post deleted successfully' });
});

export default router;