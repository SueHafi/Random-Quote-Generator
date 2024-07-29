import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import quotes from "./quotes.json";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function getARandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

app.get("/random", (req: Request, res: Response) => {
  const quote = getARandomQuote();
  res.json(quote);
});

app.post("/", (req: Request, res: Response) => {
  if (req.body.author === undefined) {
    res.status(400);
    res.json({
      message: "Author is required",
    });
    return;
  }
  if (typeof req.body.author !== "string") {
    res.status(400);
    res.json({
      message: "Author must be a string",
    });
    return;
  }
  if (req.body.author.length === 0) {
    res.status(400);
    res.json({
      message: "Author must not be empty",
    });
    return;
  }
  const { author, content } = req.body;
  const quote = { author, content };
  quotes.push(quote);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
