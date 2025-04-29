import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="app-container">
      <ProgressBar progress={30} />
      <ProgressBar progress={-40} />
      <ProgressBar progress={5} />
      <ProgressBar progress={200} />
    </div>
  );
}

export default App;
