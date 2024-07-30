import "./Quote.css";
import endingQuoteImg from "../assets/ending-quote-alt.svg";
import startingQuoteImg from "../assets/starting-quote-alt.svg";
import xLogo from "../assets/X-logo.svg";
import ButtonsContainer from "./ButtonsContainer";

type QuoteProps = {
  newQuoteOnClick: () => void;
  changePageOnClick: () => void;
  quote: {
    content: string;
    author: string;
  };
};

export default function Quote({
  newQuoteOnClick,
  changePageOnClick,
  quote,
}: QuoteProps) {
  const encodedQuote = encodeURIComponent(quote.content);
  const encodedAuthor = encodeURIComponent(quote.author);

  return (
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
          <button className="button" onClick={newQuoteOnClick}>
            New quote
          </button>
          <button className="button" onClick={changePageOnClick}>
            Add quote
          </button>
        </ButtonsContainer>
      </section>
    </div>
  );
}
