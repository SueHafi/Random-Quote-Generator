import { useEffect, useState } from "react";
import "./App.css";
import endingQuoteImg from "./assets/ending-quote-alt.svg";
import startingQuoteImg from "./assets/starting-quote-alt.svg";
import xLogo from "./assets/X-logo.svg";
import AddQuote from "./components/AddQuote";
import ButtonsContainer from "./components/ButtonsContainer";
import { APIHost } from "./utils.ts";

type QuoteAPI = {
  author: string;
  content: string;
};

function App() {
  const [quote, setQuote] = useState({
    content:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
  });
  const [isOnQuotePage, setIsOnQuotePage] = useState(true);

  async function fetchMyAPI(): Promise<void> {
    const APIUrl = `${APIHost}/random`;
    const response = await fetch(APIUrl);
    const data = (await response.json()) as QuoteAPI;
    setQuote({ content: data.content, author: data.author });
  }

  function handleNewQuoteButtonClick(): void {
    fetchMyAPI();
  }

  function handleChangePageButtonClick(): void {
    setIsOnQuotePage(!isOnQuotePage);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const encodedQuote = encodeURIComponent(quote.content);
  const encodedAuthor = encodeURIComponent(quote.author);

  return (
    <div className="quote-container">
      {isOnQuotePage ? (
        <div className="quote-box">
          <header>
            <div className="text-container">
              <img
                className="quotation-mark starting-quote-mark"
                src={startingQuoteImg}
                alt="quotation mark"
              />
              <q className="quote-text">{quote.content}</q>
              <img
                className="quotation-mark ending-quote-mark"
                src={endingQuoteImg}
                alt="quotation mark"
              />
            </div>
            <p className="quote-author">— {quote.author}</p>
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
            <ButtonsContainer className="">
              <button className="button" onClick={handleNewQuoteButtonClick}>
                New quote
              </button>
              <button className="button" onClick={handleChangePageButtonClick}>
                Add quote
              </button>
            </ButtonsContainer>
          </section>
        </div>
      ) : (
        <div className="form-container">
          <AddQuote onClick={handleChangePageButtonClick} />
        </div>
      )}
    </div>
  );
}

export default App;
