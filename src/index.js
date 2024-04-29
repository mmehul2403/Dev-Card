import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello from dev-card</h1>;
}

//creating root in reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering App funct   ion in a strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
