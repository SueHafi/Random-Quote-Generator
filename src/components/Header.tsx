import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="text-container">
        <img
          className="quotation-mark starting-quote-mark"
          src="../public/starting-quote-alt.svg"
        />
        <h1 className="quote-text">
          We cannot solve our problems with the same thinking we used when we
          created them.
        </h1>
        <img
          className="quotation-mark ending-quote-mark"
          src="../public/ending-quote-alt.svg"
        />
      </div>
      <p className="quote-author">~ Albert Einstein</p>
    </header>
  );
}
