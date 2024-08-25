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
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    }
  );

  res.json({ message: "Post updated successfully" });
});

//delete - posts/:id
router.delete("/:id", async (req, res) => {
  const post = await Post.deleteOne({ _id: req.params.id });
  // await post.();
  res.json({ message: "Post deleted successfully" });
});

export default router;
