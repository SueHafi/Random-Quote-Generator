import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./components/Quote.tsx";
import AddQuote from "./components/AddQuote";
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

  return (
    <div className="quote-container">
      {isOnQuotePage ? (
        <Quote
          quote={quote}
          newQuoteOnClick={handleNewQuoteButtonClick}
          changePageOnClick={handleChangePageButtonClick}
        />
      ) : (
        <div className="form-container">
          <AddQuote onClick={handleChangePageButtonClick} />
        </div>
      )}
    </div>
  );
}

export default App;
