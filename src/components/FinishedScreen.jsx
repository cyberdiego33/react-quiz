const FinishedScreen = function ({ points, maxPoints, highscore, dispatch }) {
  const percent = (points / maxPoints) * 100;

  let emoji;
  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🎉";
  if (percent >= 80 && percent < 100) emoji = "😁";
  if (percent >= 0 && percent < 50) emoji = "😐";
  if (percent === 0) emoji = "🤦‍♀️";

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="bg-(--color-theme) text-(--color-light) text-xl md:text-2xl text-center px-8 py-3 w-fit rounded-full mt-[30%]">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percent)}%)
      </p>
      <p className="text-xl">(Highscore: {highscore} points)</p>
      <button
        className="btn-ui text-xl cursor-pointer rounded-full px-4 py-2 bg-(--color-dark) border-2 border-(--color-dark) w-fit"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
};

export default FinishedScreen;
