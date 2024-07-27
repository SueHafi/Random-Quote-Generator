import { FormEvent, ChangeEvent, useState } from "react";
import { ReactNode } from "react";


type QuoteProps = {
  children: ReactNode;
}

export default function Quote({children}: QuoteProps) {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log("hi im working");
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="quote"></label>
      <input
        id="quote"
        name="quote"
        type="text"
        placeholder="Type a quote"
        onChange={handleChange}
        value={userInput}
      />
      {children}
    </form>
  );
}
