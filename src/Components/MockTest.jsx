import { useState, useEffect, useCallback } from "react";

function MockTest({ questions, testName, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60);
const finishTest = useCallback(() => {
  let score = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      score++;
    }
  });

  onFinish(score, answers);
}, [questions, answers, onFinish]);
  useEffect(() => {
    if (timeLeft <= 0) {
      finishTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finishTest]);

  const selectAnswer = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };

 

  if (!questions || questions.length === 0) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>⚠️ Is Mock Test me questions available nahi hain.</h2>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>📝 {testName || "Mock Test"}</h2>

      <div
        style={{
          background: "#222",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        ⏰ Time Left : {Math.floor(timeLeft / 60)} :
        {(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10,1fr)",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpToQuestion(index)}
            style={{
              padding: "8px",
              background:
                currentQuestion === index
                  ? "#1976D2"
                  : answers[index]
                  ? "#4CAF50"
                  : "#ddd",
              color: currentQuestion === index ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <h3>
        Question {currentQuestion + 1} / {questions.length}
      </h3>

      <h2>{q.question}</h2>

      {q.options.map((option, index) => (
        <button
          key={index}
          onClick={() => selectAnswer(option)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "12px",
            background:
              answers[currentQuestion] === option
                ? "#4CAF50"
                : "#f2f2f2",
            color:
              answers[currentQuestion] === option
                ? "white"
                : "black",
            border: "none",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          {option}
        </button>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          style={{ padding: "10px 20px" }}
        >
          ⬅ Previous
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={finishTest}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            ✅ Finish Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            style={{
              padding: "10px 20px",
              background: "#1976D2",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Next ➡
          </button>
        )}
      </div>
    </div>
  );
}

export default MockTest;
