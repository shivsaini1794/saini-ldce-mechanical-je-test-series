import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TestHistory({ user, onRetest, onBack }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const snap = await getDocs(collection(db, "TestHistory"));
        const rows = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((x) => x.userId === user.uid)
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        setHistory(rows);
      } catch (e) {
        console.error(e);
        alert("Test History load nahi ho pa rahi.");
      } finally {
        setLoading(false);
      }
    };
    loadHistory();
  }, [user.uid]);

  return (
    <div style={{ maxWidth: "850px", margin: "20px auto", padding: "20px" }}>
      <button onClick={onBack} style={{ marginBottom: 20, padding: "10px 18px" }}>
        ⬅ Back to Dashboard
      </button>
      <h1>📊 Test History</h1>
      {loading ? <p>Loading...</p> : history.length === 0 ? (
        <p>Abhi koi test history nahi hai.</p>
      ) : history.map((item) => (
        <div key={item.id} style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 10, padding: 15, marginBottom: 12 }}>
          <h3>{item.testName || "Mock Test"}</h3>
          <p><b>Score:</b> {item.score}/{item.totalQuestions} &nbsp; | &nbsp; <b>Percentage:</b> {item.percentage}%</p>
          <p>✅ Correct: {item.correct} &nbsp; ❌ Wrong: {item.wrong}</p>
          <p style={{ color: "#666", fontSize: 13 }}>{item.createdAt ? new Date(item.createdAt).toLocaleString("en-IN") : ""}</p>
          <button onClick={() => onRetest(item.testName)} style={{ padding: "9px 16px" }}>🔄 Retest</button>
        </div>
      ))}
    </div>
  );
}

export default TestHistory;
