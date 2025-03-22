import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((s) => s - 1);
        } else if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
        } else {
          setRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [running, seconds, minutes]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    clearInterval(timer);
    setRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const handlePause = () => {
    setRunning(false);
  };

  return (
    <>
      Minute :{" "}
      <input
        type="number"
        min={0}
        value={minutes}
        onChange={(e) =>
          e.target.value < 0 ? setMinutes(0) : setMinutes(e.target.value)
        }
      />
      Second :{" "}
      <input
        type="number"
        value={seconds}
        onChange={(e) =>
          e.target.value < 0 ? setSeconds(0) : setSeconds(e.target.value)
        }
      />
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}

export default App;
