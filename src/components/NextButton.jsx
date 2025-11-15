const NextButton = function ({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn-ui text-xl cursor-pointer rounded-full px-4 py-2 bg-(--color-dark) border-2 border-(--color-dark) w-fit"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn-ui text-xl cursor-pointer rounded-full px-4 py-2 bg-(--color-dark) border-2 border-(--color-dark) w-fit"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
};

export default NextButton;
