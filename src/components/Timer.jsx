import { useEffect } from "react";

const Timer = function ({ dispatch, secondsCount, review, index }) {
  const mins = Math.floor(secondsCount / 60);
  const seconds = secondsCount % 60;

  // Tick every second
  useEffect(() => {
    if (review) return; // no ticking during review mode

    const id = setInterval(() => {
      dispatch({ type: "ticking" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, review]);

  // Finish when time hits 0
  useEffect(() => {
    if (secondsCount === 0 && !review) {
      dispatch({ type: "finished" });
    }
  }, [secondsCount, dispatch, review]);

  // if (secondsCount === 0) dispatch({ type: "finished" });
  return (
    <>
      {review ? (
        <button
          className="btn-ui text-xl cursor-pointer rounded-full px-4 py-2 bg-(--color-dark) border-2 border-(--color-dark) w-fit"
          onClick={() => dispatch({ type: "previousQuestion" })}
          disabled={index === 0 ? true : false}
        >
          Previous
        </button>
      ) : (
        <div className="text-xl md:text-2xl border-2 border-(--color-dark) rounded-full px-4 py-2 text-white">
          {mins < 10 && "0"}
          {mins}: {seconds < 10 && "0"}
          {seconds}
        </div>
      )}
    </>
  );
};

export default Timer;
