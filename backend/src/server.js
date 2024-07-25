const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const quotes = require("./quotes.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


function getARandomQuote() {
  const randomIndex= Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}


app.get("/random", (req, res) => {
  const quote = getARandomQuote();
  res.json(quote);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
