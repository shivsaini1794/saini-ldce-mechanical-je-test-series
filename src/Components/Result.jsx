function Result({ score, totalQuestions, testName, onRetest, onBack }) {
  const correct = score;
  const wrong = totalQuestions - score;
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

  let message = "";
  if (percentage >= 90) message = "🏆 Outstanding! Excellent Performance";
  else if (percentage >= 75) message = "🎉 Very Good! Keep it up";
  else if (percentage >= 50) message = "👍 Good! More Practice Required";
  else message = "📚 Keep Practicing. You Can Do Better!";

  return (
    <div className="App">
      <h1>🎉 Test Completed</h1>
      <h3>{testName || "Mock Test"}</h3>
      <h2>🏆 Final Score</h2>
      <h1>{score} / {totalQuestions}</h1>
      <h2>📊 Percentage : {percentage}%</h2>
      <hr />
      <h3>✅ Correct Answers : {correct}</h3>
      <h3>❌ Wrong Answers : {wrong}</h3>
      <h3>{message}</h3>
      <br />
      <button onClick={() => onRetest(testName)}>🔄 Retest</button>
      <button onClick={onBack} style={{ marginLeft: 10 }}>🏠 Dashboard</button>
    </div>
  );
}

export default Result;
