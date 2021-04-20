import "./App.css";
import { useState, useEffect } from "react";
import questions from "./Questions";
import Answer from "./components/Answer";

function App() {
  const [card, setCard] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNextClick = () => {
    if (card >= questions.length - 1) {
      return setCard(0);
    }
    return setCard(card + 1);
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

  const handleAnswerClick = (ans) => {
    if (ans === questions[card].a) {
      console.log("Correct!");
      return;
    }

    if (ans !== questions[card].a) {
      console.log("Wrong!");
      return;
    }
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
      <div className="flash-card">
        <p className="question">{questions[card].q}</p>
        <hr />
        <div className="answer-group">
          <Answer
            correctAnswer={questions[card].a}
            buttonAnswer={answers[0].a}
          />
          <Answer
            correctAnswer={questions[card].a}
            buttonAnswer={answers[1].a}
          />
          <Answer
            correctAnswer={questions[card].a}
            buttonAnswer={answers[2].a}
          />
          <Answer
            correctAnswer={questions[card].a}
            buttonAnswer={answers[3].a}
          />
        </div>
        <button onClick={handleNextClick}>N E X T!</button>
      </div>
    </div>
  );
}

export default App;
