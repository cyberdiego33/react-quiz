const StartScreen = function ({ numQuestions, dispatch }) {
  return (
    <div className="text-white flex flex-col justify-center space-y-4 text-center mt-[30%]">
      <h2 className="font-bold text-3xl md:text-5xl">
        Welcome to the React Quiz
      </h2>
      <h3 className="font-semibold text-xl md:text-3xl">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="btn btn-ui text-xl cursor-pointer rounded-full px-6 py-2 mx-auto bg-(--color-dark) border-2 border-(--color-dark) w-fit"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
