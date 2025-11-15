// import DateCounter from "./components/DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import QuestionsCom from "./components/QuestionsCom";
import Options from "./components/Options";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const initialState = {
  questions: [],

  // Loading, error, ready, active, finished
  status: "loading",

  // Previous, next
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsCount: null,
};

const SECS_PER_QUESTION = 2;

const reducer = function (state, action) {
  switch (action.type) {
    case "dataRecieved": // On App load and fetch questions
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed": // Incase unable to fetch questions
      return { ...state, status: "error" };

    case "start": // User clicks start, opens questions
      return {
        ...state,
        status: "active",
        secondsCount: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer": // User chooses an answer
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null, highscore: 30 };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "ticking":
      return {
        ...state,
        secondsCount: state.secondsCount - 1,
        // status: state.secondsCount === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action is unknown");
  }
};

const App = function () {
  const [
    { questions, status, index, answer, points, highscore, secondsCount },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    const fetchFunction = async function () {
      try {
        console.log("Starting fetch");
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    };

    fetchFunction();
  }, []);

  return (
    <div className="bg-(--color-darkest) text-(--color-light) min-h-screen p-4 md:px-10 flex justify-center">
      <div className="max-w-[710px]">
        <Header />

        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <div className="w-[80%] mx-auto">
              <Progress
                index={index}
                numQuestions={numQuestions}
                maxPoints={maxPoints}
                points={points}
                answer={answer}
              />
              <QuestionsCom question={questions[index].question}>
                <Options
                  question={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                />
              </QuestionsCom>
              <Footer>
                <Timer dispatch={dispatch} secondsCount={secondsCount} />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  index={index}
                  numQuestions={numQuestions}
                />
              </Footer>
            </div>
          )}
          {status === "finished" && (
            <FinishedScreen
              points={points}
              maxPoints={maxPoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </div>
  );
};

export default App;
