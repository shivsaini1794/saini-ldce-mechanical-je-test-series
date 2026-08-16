import { useState } from "react";
import mockTest from "./data/mockTest";
import "./App.css";
import Header from "./Components/Header";

function App() {
 const [testCompleted, setTestCompleted] = useState(false);
  const [startTest, setStartTest] = useState(false);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [score, setScore] = useState(0); 
const nextQuestion = () => {
  checkAnswer();

  if (currentQuestion < mockTest.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  } else {
    const finalScore =
      score +
      (selectedAnswer === mockTest[currentQuestion].answer ? 1 : 0);

    setTestCompleted(true);
  }
};
<button
  onClick={() =>
    alert(
      `🏆 Final Score: ${score}/${mockTest.length}`
    )
  }
>
  ✅ Submit Test
</button>
const previousQuestion = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer("");
  }
};
const checkAnswer = () => {
  if (selectedAnswer === mockTest[currentQuestion].answer) {
    setScore(score + 1);
  }
};
return (
 if (testCompleted) {
  return (
    <div className="App">
      <h1>🎉 Test Completed</h1>

      <h2>
        🏆 Score: {score}/{mockTest.length}
      </h2>

      <button
        onClick={() => {
          setCurrentQuestion(0);
          setScore(0);
          setSelectedAnswer("");
          setTestCompleted(false);
          setStartTest(false);
        }}
      >
        🔄 Back to Home
      </button>
    </div>
  );
}  
   <div>
      <Header />

      <div className="App">
       <div className="hero">
  <h1>🚂 RAILWAY LDCE MECHANICAL JE TEST SERIES</h1>

  <p>
    Complete Preparation for Railway LDCE Mechanical JE
  </p>

  <h3>🎯 100+ Mock Tests | 📚 Topic Wise Tests | 📄 PYQs</h3>
</div>
        <h2>Welcome</h2>
        <h3>🏆 Score: {score}</h3>
        <p>India's Best Railway LDCE Mechanical JE Test Series</p>

        <button onClick={() => setStartTest(true)}>
  📝 Start Free Mock Test
</button>
        <button>🔐 Login</button>
        <button>💎 Buy Premium Test Series</button>

        <div className="features">

 {startTest && (
<div>
  <h2>📝 Sample Mock Test</h2>
<h4>
  Question {currentQuestion + 1} of {mockTest.length}
</h4>
  <h3>{mockTest[currentQuestion].question}</h3>

  {mockTest[currentQuestion].options.map((option, index) => (
  <button
    key={index}
    onClick={() => setSelectedAnswer(option)}
    style={{
      display: "block",
      margin: "10px auto",
      padding: "10px",
      width: "80%",
      background: selectedAnswer === option ? "#4CAF50" : "#f0f0f0",
      color: selectedAnswer === option ? "white" : "black",
    }}
  >
    {option}
  </button>
))}
<button onClick={previousQuestion}>
  ⬅️ Previous
</button>

<button onClick={nextQuestion}>
  Next ➡️
</button>

</div>
)}
         
          <div className="card">
            <h3>📚 Topic Wise Tests</h3>
            <p>Chapter-wise practice tests.</p>
          </div>

          <div className="card">
            <h3>📝 Full Mock Tests</h3>
            <p>100 Questions with Timer.</p>
          </div>

          <div className="card">
            <h3>📄 Previous Year Papers</h3>
            <p>Solved Railway LDCE Papers.</p>
          </div>

          <div className="card">
            <h3>📖 PDF Notes</h3>
            <p>Download Mechanical Notes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;