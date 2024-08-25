import { Router } from "express";
import { Post } from "../schemas/schema.js";
const router = Router();

// Get - /posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
});

//post - /posts
router.post("/", async (req, res) => {
  const { title, description, id } = req.body;

  const newPost = new Post({ title, description, author: id });
  await newPost.save();
  res.status(201).json({ message: "Post created successfully" });
});

//get - post/:id
router.get("/:id", async (req, res) => {
  const post = await Post.find({ author: req.params.id });
  res.json(post);
});

//put - post/:id
router.put("/:id", async (req, res) => {
  const post = await Post.find({ author: req.params.id });
  if (post.author.toString() !== req.params._id.toString()) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  post.set(req.body);
  await post.save();
  res.json({ message: "Post updated successfully" });
});

//delete - posts/:id
router.delete("/:id", async (req, res) => {
  const post = await Post.deleteOne({ _id: req.params.id });
  // await post.();
  res.json({ message: "Post deleted successfully" });
});

export default router;
