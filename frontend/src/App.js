import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Index from "./Components/Index";

function App() {
  let input;
  return (
    <div className="App">
      <NavBar />
      <input
        ref={node => {
          input = node;
        }}
      />
    </div>
  );
}

export default App;
