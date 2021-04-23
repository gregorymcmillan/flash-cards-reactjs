import React, { useState, useEffect } from "react";
import "./Answer.css";

const Answer = ({ correctAnswer, buttonAnswer, letter, scoreHandler }) => {
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    setButtonClass("");
  }, [correctAnswer]);

  const isCorrect = () => {
    if (correctAnswer === buttonAnswer) {
      setButtonClass("correct");
      scoreHandler("correct");
      return;
    }

    if (correctAnswer !== buttonAnswer) {
      setButtonClass("wrong");
      scoreHandler("wrong");
      return;
    }
  };

  return (
    <button onClick={isCorrect} className={`answer ${buttonClass}`}>
      <div className="circle">{letter}</div>
      <div className="answer-container">
        <span
          className={buttonAnswer.length > 20 ? "answer-small" : "answer-large"}
        >
          {buttonAnswer}
        </span>
      </div>
    </button>
  );
};

export default Answer;
