import { useEffect, useState } from "react";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
function TestHistory({ user, onRetest, onBack }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaper, setSelectedPaper] = useState(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);

        const q = query(
          collection(db, "TestHistory"),
          where("userId", "==", user.uid)
        );

        const snap = await getDocs(q);

        const now = Date.now();
const tenDays = 10 * 24 * 60 * 60 * 1000;

const rows = [];

for (const d of snap.docs) {
  const data = d.data();

  let expiryTime = 0;

  if (data.expiresAt?.toDate) {
    expiryTime = data.expiresAt.toDate().getTime();
  } else if (data.createdAt) {
    expiryTime = new Date(data.createdAt).getTime() + tenDays;
  }

  if (expiryTime && expiryTime <= now) {
    await deleteDoc(doc(db, "TestHistory", d.id));
    continue;
  }

  rows.push({
    id: d.id,
    ...data,
  });
}

rows.sort(
  (a, b) =>
    new Date(b.createdAt || 0) -
    new Date(a.createdAt || 0)
);

setHistory(rows);
      } catch (e) {
        console.error("History load error:", e);
        alert("Test History load nahi ho pa rahi.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.uid) {
      loadHistory();
    }
  }, [user]);

  if (selectedPaper) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          padding: "20px",
        }}
      >
        <button
          onClick={() => setSelectedPaper(null)}
          style={{
            padding: "10px 18px",
            marginBottom: "20px",
          }}
        >
          ⬅ Back to Test History
        </button>

        <h1>📖 {selectedPaper.testName || "Mock Test"} - Paper</h1>

        <p>
          <b>Score:</b> {selectedPaper.score}/
          {selectedPaper.totalQuestions}
          &nbsp; | &nbsp;
          <b>Percentage:</b> {selectedPaper.percentage}%
        </p>

        {!selectedPaper.questions ||
        selectedPaper.questions.length === 0 ? (
          <p>
            ⚠️ Is old test me question-wise answer data save nahi hai.
            Naye test attempt ke baad yahan pura paper dikhega.
          </p>
        ) : (
          selectedPaper.questions.map((q, index) => {
            const isSkipped = !q.studentAnswer;
            const isCorrect =
              q.studentAnswer === q.correctAnswer;

            return (
              <div
                key={index}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "15px",
                }}
              >
                <h3>
                  Q{index + 1}. {q.question}
                </h3>

                {q.options &&
                  q.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      style={{
                        padding: "8px",
                        margin: "5px 0",
                        borderRadius: "6px",
                        background:
                          option === q.correctAnswer
                            ? "#d4edda"
                            : option === q.studentAnswer
                            ? "#f8d7da"
                            : "#f5f5f5",
                      }}
                    >
                      {option}
                    </div>
                  ))}

                <p>
                  👤 <b>Student Answer:</b>{" "}
                  {isSkipped ? "Not Attempted" : q.studentAnswer}
                </p>

                <p>
                  ✅ <b>Correct Answer:</b> {q.correctAnswer}
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    color: isSkipped
                      ? "#ff9800"
                      : isCorrect
                      ? "green"
                      : "red",
                  }}
                >
                  {isSkipped
                    ? "⚪ Not Attempted"
                    : isCorrect
                    ? "✅ Correct"
                    : "❌ Wrong"}
                </p>
              </div>
            )
          })
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: 20,
          padding: "10px 18px",
        }}
      >
        ⬅ Back to Dashboard
      </button>

      <h1>📊 Test History</h1>

      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>Abhi koi test history nahi hai.</p>
      ) : (
        history.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 15,
              marginBottom: 12,
            }}
          >
            <h3>{item.testName || "Mock Test"}</h3>

            <p>
              <b>Score:</b> {item.score}/{item.totalQuestions}
              &nbsp; | &nbsp;
              <b>Percentage:</b> {item.percentage}%
            </p>

            <p>
              ✅ Correct: {item.correct}
              &nbsp;&nbsp;
              ❌ Wrong: {item.wrong}
            </p>

            <p
              style={{
                color: "#666",
                fontSize: 13,
              }}
            >
              {item.createdAt
                ? new Date(item.createdAt).toLocaleString("en-IN")
                : ""}
            </p>

            <button
              onClick={() => setSelectedPaper(item)}
              style={{
                padding: "9px 16px",
                marginRight: "8px",
                background: "#1976D2",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              📖 View Paper
            </button>

            <button
              onClick={() => onRetest(item.testName)}
              style={{
                padding: "9px 16px",
              }}
            >
              🔄 Retest
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TestHistory;
