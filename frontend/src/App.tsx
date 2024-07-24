import { useEffect, useState } from "react";
import "./App.css";
import endingQuoteImg from "./assets/ending-quote-alt.svg";
import startingQuoteImg from "./assets/starting-quote-alt.svg";
import xLogo from "./assets/X-logo.svg";

const APIUrl = "https://api.quotable.io/random";

type QuoteAPI = {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
};

function App() {
  const [quote, setQuote] = useState(
    "We cannot solve our problems with the same thinking we used when we created them."
  );
  const [author, setAuthor] = useState("Albert Einstein");

  async function fetchMyAPI(): Promise<void> {
    const response = await fetch(APIUrl);
    const result = (await response.json()) as QuoteAPI;
    setQuote(result.content);
    setAuthor(result.author);
  }

  function handleButtonClick(): void {
    fetchMyAPI();
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const encodedQuote = encodeURIComponent(quote);
  const encodedAuthor = encodeURIComponent(author);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <header>
          <div className="text-container">
            <img
              className="quotation-mark starting-quote-mark"
              src={startingQuoteImg}
              alt="quotation mark"
            />
            <q className="quote-text">{quote}</q>
            <img
              className="quotation-mark ending-quote-mark"
              src={endingQuoteImg}
              alt="quotation mark"
            />
          </div>
          <p className="quote-author">— {author}</p>
        </header>
        <section className="links-container">
          <div className="links-box">
            <a
              className="link"
              href={`https://x.com/intent/tweet?text=${encodedQuote} By ${encodedAuthor}`}
              target="_blank"
              title="Share quote on X"
            >
              <img className="link-icon" src={xLogo} alt="share on X" />
            </a>
          </div>
          <button className="button" onClick={handleButtonClick}>
            New quote
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;