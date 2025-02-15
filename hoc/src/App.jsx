import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import WithAuth from "./hoc/WithAuth";

function App() {
  const WithAuthDashboard = WithAuth(Dashboard);
  const WithAuthProfile = WithAuth(Profile);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<WithAuthDashboard />} />
          <Route path="/profile" element={<WithAuthProfile />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher Order Component</h1>
                <div>Login page for unauthenticated users</div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
