const Progress = function ({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="mb-4">
      <progress
        className="w-full h-3 rounded-full"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex justify-between">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;
