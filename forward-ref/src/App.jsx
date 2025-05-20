import { useRef } from "react";
import "./App.css";
import UserInput from "./UserInput";

function App() {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput} style={{ margin: "5px 0px" }}>
        Update Input Field
      </button>
    </>
  );
}

export default App;
