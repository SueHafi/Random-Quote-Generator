const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const quotes = [
  { author: "sue", content: "If you fall just get back up!" },
  { author: "Spudnick", content: "Go slow and steady, not fast and furious!" },
  { author: "James", content: "Life is already hard, don't make it harder..." },
];


app.get("/random", (req, res) => {
  res.json(quotes);
});
app.get("/", (req, res) => {
  res.send("hiii");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
