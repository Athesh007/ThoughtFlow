import cors from "cors";
import express from "express";
import router from "./router/posts.js";
import userrouter from "./router/users.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const db = await mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/posts", router);
app.use("/user", userrouter);

app.listen(3001, () => {
  console.log(`Listening on port 3000`);
});

export default db;
