import Header from './components/Header';
import Section from './components/Section';
import "./App.css";

function App() {
  return (
    <>
      <div className="quote-container">
        <div className="quote-box">
          <Header/>
          <Section/>
        </div>
      </div>
    </>
  );
}

export default App;
