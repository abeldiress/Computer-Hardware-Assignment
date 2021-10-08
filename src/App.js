import React, { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [num, setNum] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  const onOptionClick = (e) => {
    if (e.target.value === questions[num].answer) {
      setCorrect(true);
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const onNextClick = () => {
    if (num === questions.length - 1) {
      setEnd(true);
    } else {
      setCorrect(false);
      setAnswered(false);
      setNum(num + 1);
    }
  };

  return (
    <div className="App">
      {!end && (
        <>
          <h1>Welcome to the Computer Hardware Quiz!</h1>
          <p>
            {score} / {num + 1}
          </p>
          <h3>{questions[num].question}</h3>
          <img alt="" style={{ marginBottom: 20 }} src={questions[num].image} />
          {questions[num].options.map((opt) => {
            return (
              <div>
                <input
                  type="radio"
                  id={opt}
                  name={opt}
                  value={opt}
                  onClick={onOptionClick}
                  checked={answered}
                />
                <label for={opt}>{opt}</label>
              </div>
            );
          })}
          {answered && correct && (
            <div class="explanation">
              <h4>Correct!</h4>
              <p>{questions[num].explanation}</p>
            </div>
          )}
          {answered && !correct && (
            <div class="explanation-wrong">
              <h4>Incorrect!</h4>
              <p>{questions[num].explanation}</p>
            </div>
          )}
          <button
            onClick={onNextClick}
            style={{
              marginTop: 20,
            }}
          >
            Next
          </button>
        </>
      )}
      {end && (
        <>
          <h1>Congratulations!</h1>
          <p>
            You scored {score} out of {num + 1} questions.
          </p>
        </>
      )}
    </div>
  );
}

export default App;
