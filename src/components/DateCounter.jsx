import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = function (state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + state.step };
    case "decrease":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
};

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const decreaseFunc = function () {
    dispatch({ type: "decrease" });
  };

  const increaseFunc = function () {
    dispatch({ type: "increase" });
  };

  const defineCount = function (e) {
    const payload = Number(e.target.value);
    dispatch({ type: "setCount", payload });
  };

  const defineStep = function (e) {
    const payload = Number(e.target.value);
    dispatch({ type: "setStep", payload });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decreaseFunc}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increaseFunc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
