import cors from 'cors';
import express from 'express';
import router from "./router/posts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/posts', router);

app.listen(() => {
  console.log(`Listening on port 3000`);
});