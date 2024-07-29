import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import { z, ZodError } from "zod";
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
  const quoteSchema = z.object({
    content: z.string().trim().min(1),
    author: z.string().trim(),
  });

  let result: z.infer<typeof quoteSchema>;
  try {
    result = quoteSchema.parse(req.body);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400);
      res.json({
        errorMessage: error.issues[0].message,
        errorProperty: error.issues[0].path[0],
      });
    }
    return;
  }

  const { author, content } = result;
  const quote = { author, content };
  quotes.push(quote);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
