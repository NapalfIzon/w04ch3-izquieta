import "./Keyboard.css";
const Keyboard = () => {
  const detectKey = (event) => {};

  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          <li>
            <button className="key" onClick={detectKey}>
              1
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              2
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              3
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              4
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              5
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              6
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              7
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              8
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              9
            </button>
          </li>
          <li>
            <button className="key" onClick={detectKey}>
              0
            </button>
          </li>
          <li>
            <button className="key big" onClick={() => {}}>
              delete
            </button>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Keyboard;
