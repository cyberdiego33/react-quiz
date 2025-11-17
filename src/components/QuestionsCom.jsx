const QuestionsCom = function ({ question, children }) {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">{question}</h4>
      {/* <Options question={question} /> */}
      {children}
    </div>
  );
};

export default QuestionsCom;
