import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app
  .get("/", (req, res) => {
    console.log("You hit this endpoint");
    res.send("Hello World");
  })
  .listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
