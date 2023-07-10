function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>
        {numQuestions < 2
          ? `${numQuestions} question to test your React knowledge`
          : `${numQuestions} questions to test your React knowledge`}{" "}
      </h3>
      <button className="btn btn-ui">Lets Start</button>
    </div>
  );
}

export default StartScreen;
