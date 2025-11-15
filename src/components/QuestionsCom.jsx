const QuestionsCom = function ({ question, children }) {
  console.log(question);
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">{question}</h4>
      {/* <Options question={question} /> */}
      {children}
    </div>
  );
};

export default QuestionsCom;
