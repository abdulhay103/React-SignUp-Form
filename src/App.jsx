import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/InputBox/SignUp";

function App() {
  return (
    <div className="App">
      <Profile />
      <SignUp />
    </div>
  );
}

export default App;
