import React, { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to the Computer Hardware Quiz!</h1>
      <h3>{questions[num]["question"]}</h3>
      <p></p>
      <img alt="" src={questions[num]["image"]} />
    </div>
  );
}

export default App;
