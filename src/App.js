import "./App.css";
import Actions from "./Components/Actions/Actions";
import Info from "./Components/Info/Info";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="container">
        <Info isHidden={true} />
        <main className="phone">
          <Keyboard />
          <div className="actions">
            <span className="number">667359961</span>
            <Actions isCalling={false} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
