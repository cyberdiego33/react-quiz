const Options = function ({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="space-y-4 mb-15">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-ui text-lg md:text-xl cursor-pointer rounded-full px-10 py-2 md:py-5 bg-(--color-dark) border-2 border-(--color-dark) w-full text-left ${
            index === answer ? "transform translate-x-8" : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-(--color-theme) border-2 border-(--color-theme) text-(--color-light)"
                : "bg-[#ffa94d] border-2 border-[#ffa94d] text-[#343a40]"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
