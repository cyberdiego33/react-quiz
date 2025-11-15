import { useEffect } from "react";

const Timer = function ({ dispatch, secondsCount }) {
  const mins = Math.floor(secondsCount / 60);
  const seconds = secondsCount % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "ticking" });
    }, 1000);

    return function () {
      clearInterval(id);
    };
  }, [dispatch]);

  if (secondsCount === 0) dispatch({ type: "finished" });
  return (
    <div className="text-xl md:text-2xl border-2 border-(--color-dark) rounded-full px-4 py-2 text-white">
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
