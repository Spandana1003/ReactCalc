import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Button/Button.component";

function App() {
  const [num, setnum] = useState("0");
  useEffect(() => {
    if (num === "Infinity") {
      alert("Cannot divide by 0!");
      setnum("0");
    }
  });
  return (
    <div className="main-container">
      <div className="value">{num}</div>
      <div className="operations">
        <button
          onClick={() => {
            setnum(num + "+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setnum(num + "-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setnum(num + "*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setnum(num + "/");
          }}
        >
          /
        </button>

        <button
          onClick={() => {
            setnum("0");
          }}
        >
          clear
        </button>
      </div>
      <div className="number-buttons-container">
        <Button label={1} value={num} change={setnum} />
        <Button label={2} value={num} change={setnum} />
        <Button label={3} value={num} change={setnum} />
        <Button label={4} value={num} change={setnum} />
        <Button label={5} value={num} change={setnum} />
        <Button label={6} value={num} change={setnum} />
        <Button label={7} value={num} change={setnum} />
        <Button label={8} value={num} change={setnum} />
        <Button label={9} value={num} change={setnum} />
        
        <button
          onClick={() => {
            if (num.length === 1) {
              setnum("0");
            } else {
              setnum(num.slice(0, -1));
            }
          }}
        >
          &#x2190;
        </button>
          <Button label={0} value={num} change={setnum} />
          <button
          onClick={() => {
            setnum(`${eval(num)}`);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
