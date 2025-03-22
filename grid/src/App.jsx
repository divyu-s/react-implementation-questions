import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid } from "./components/Grid";

function App() {
  return <Grid rows={4} columns={4} />;
}

export default App;
