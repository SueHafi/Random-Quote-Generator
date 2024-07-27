import { FormEvent, ChangeEvent, useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import "./Quote.css";

type QuoteProps = {
  onClick: () => void;
};

export default function Quote({ onClick }: QuoteProps) {
  const [userQuoteInput, setUserQuoteInput] = useState("");
  const [userAuthorInput, setUserAuthorInput] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  function handleQuoteChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserQuoteInput(event.target.value);
  }

  function handleAuthorChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserAuthorInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="add-quote-heading">
      <div className="container">
        <h2 className="form-title" id="add-quote-heading">
          Add your own quote
        </h2>
        <label className="label-text" htmlFor="quote">
          Quote :
        </label>
        <input
          className="input-text"
          id="quote"
          name="quote"
          type="text"
          placeholder="Type a quote"
          onChange={handleQuoteChange}
          value={userQuoteInput}
        />
      </div>
      <div className="container">
        <label className="label-text author-text" htmlFor="author">
          Author:
        </label>
        <input
          className="input-text"
          id="author"
          name="author"
          type="text"
          placeholder="Anonomous"
          onChange={handleAuthorChange}
          value={userAuthorInput}
        />
      </div>
      <ButtonsContainer className="making-quote-container">
        <button className="button" type="submit">
          Submit
        </button>
        <button type="button" className="button" onClick={onClick}>
          Cancel
        </button>
      </ButtonsContainer>
    </form>
  );
}
