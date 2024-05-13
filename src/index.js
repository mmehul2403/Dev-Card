import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "./Components/Avatar";
import Intro from "./Components/Intro";
import SkillList from "./Components/SkillList";
function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

//creating root in reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering App funct   ion in a strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
