import React from "react";

const Question = ({ card, questions }) => {
  return <p className="question">{questions[card].q}</p>;
};

export default Question;
