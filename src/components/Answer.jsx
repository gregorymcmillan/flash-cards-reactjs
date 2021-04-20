import React, { useState, useEffect } from "react";

const Answer = ({ correctAnswer, buttonAnswer }) => {
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    setButtonClass("");
  }, [correctAnswer]);

  const isCorrect = () => {
    if (correctAnswer === buttonAnswer) {
      setButtonClass("correct");
      return;
    }

    if (correctAnswer !== buttonAnswer) {
      setButtonClass("wrong");
      return;
    }
  };

  return (
    <button onClick={isCorrect} className={`answer ${buttonClass}`}>
      <div className="circle">A</div>
      <span>{buttonAnswer}</span>
    </button>
  );
};

export default Answer;
