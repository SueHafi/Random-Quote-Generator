import "./Section.css";

export default function Section() {
  return (
    <section className="links-container">
      <div className="links-box">
        <a className="link" src=''>
          <img className="link-icon" src="../public/twitter-icon.svg" />
        </a>
        <a className="link" src=''>
          <img className="link-icon" src="../public/facebook-icon.svg" />
        </a>
      </div>
        <button className="button">New quote</button>
    </section>
  );
}
