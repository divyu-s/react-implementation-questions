import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveCalculation = (num) => {
    for (let i = 0; i <= 100000000; i++) {}

    return num * 2;
  };

  const doubleValue = useMemo(() => expensiveCalculation(input), [input]);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <h1>Double Value : {doubleValue}</h1>
      <ChildComponent num={doubleValue} />
    </>
  );
}

export default App;
