import { FormEvent, ChangeEvent, useState } from "react";
import { ReactNode } from "react";
import './Quote.css';

type QuoteProps = {
  children: ReactNode;
};

export default function Quote({ children}: QuoteProps) {
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
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label className='label-text' htmlFor="quote">Quote :</label>
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
        <label className='label-text author-text' htmlFor="author">Author:</label>
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
      {children}
    </form>
  );
}
