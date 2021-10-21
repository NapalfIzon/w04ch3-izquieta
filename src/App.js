import "./App.css";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="container">
        <span className="message">Calling...</span>
        <main className="phone">
          <Keyboard />
          <div className="actions">
            <span className="number">667359961</span>
            <a href="call" className="call">
              Call
            </a>
            <a href="hang" className="hang active">
              Hang
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
