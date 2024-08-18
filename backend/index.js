import express from "express";
import db from "./db/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(8000, () => console.log("Server Up"));
