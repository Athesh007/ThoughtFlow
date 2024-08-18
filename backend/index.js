import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(8000, () => console.log("Server Up"));
