import "./App.css";
import { useState, useEffect } from "react";
import questions from "./Questions";
import Answer from "./components/Answer";
import Profile from "./components/Profile";

import next from "./next.svg";
import prev from "./prev.svg";

function App() {
  const [card, setCard] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);

  const handleNextClick = () => {
    if (card >= questions.length - 1) {
      // return setCard(questions.length - 1);
      return null;
    }
    return setCard(card + 1);
  };

  const handlePrevClick = () => {
    if (card === 0) {
      return setCard(0);
    }
    return setCard(card - 1);
  };

  const handleReset = () => {
    setIncorrectScore(0);
    setCorrectScore(0);
    setCard(0);
  };

  const scoreHandler = (score) => {
    let totalScoresCounted = incorrectScore + correctScore;
    let totalQuestionsAsked = card + 1;
    if (totalScoresCounted >= totalQuestionsAsked) {
      return null;
    }

    if (score === "correct") {
      setCorrectScore(correctScore + 1);
    } else if (score === "wrong") {
      setIncorrectScore(incorrectScore + 1);
    }
  };

  const shuffle = (array) => {
    let tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  };

  useEffect(() => {
    // remove current "flash card" from the table
    const otherQuestions = questions.filter((q) => q.a !== questions[card].a);
    // shuffle reaming questions, slice 3, combine with current and reshuffle the new array
    const distractions = shuffle([...otherQuestions]).slice(0, 3);
    const finalAnswers = shuffle([questions[card], ...distractions]);
    setAnswers(finalAnswers);
  }, [card]);

  // const answers = useMemo(() => {
  //   // remove current "flash card" from the table
  //   const otherQuestions = questions.filter((q) => q.a !== questions[card].a);
  //   // shuffle reaming questions, slice 3, combine with current and reshuffle the new array
  //   const distractions = shuffle([...otherQuestions]).slice(0, 3);
  //   const finalAnswers = shuffle([questions[card], ...distractions]);
  //   return finalAnswers;
  // }, [card]);
  // **** This is an implementation without state but memoization instead,
  // **** read about it and see why it works.

  // useEffect is called after the first render. Read about more about the lifecycle with hooks
  if (!answers.length) {
    return null;
  }
  return (
    <div className="App">
      <div className="container">
        <div className="flash-card">
          <p className="question">{questions[card].q}</p>
          <div className="answer-group">
            <Answer
              correctAnswer={questions[card].a}
              buttonAnswer={answers[0].a}
              letter="A"
              scoreHandler={scoreHandler}
            />
            <Answer
              correctAnswer={questions[card].a}
              buttonAnswer={answers[1].a}
              letter="B"
              scoreHandler={scoreHandler}
            />
            <Answer
              correctAnswer={questions[card].a}
              buttonAnswer={answers[2].a}
              letter="C"
              scoreHandler={scoreHandler}
            />
            <Answer
              correctAnswer={questions[card].a}
              buttonAnswer={answers[3].a}
              letter="D"
              scoreHandler={scoreHandler}
            />
          </div>
          <div className="nav-button-group">
            <button onClick={handlePrevClick}>
              <img className="nav-button" src={prev} alt="prev" />
            </button>
            <button onClick={handleNextClick}>
              <img className="nav-button" src={next} alt="next" />
            </button>
          </div>
        </div>

        <Profile
          correctScore={correctScore}
          incorrectScore={incorrectScore}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
