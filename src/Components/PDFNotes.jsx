import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
function PDFNotes({ onBack }) {
const [notes, setNotes] = useState([]);

useEffect(() => {
  loadPDFs();
}, []);

const loadPDFs = async () => {
  const snap = await getDocs(collection(db, "PDFs"));

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setNotes(data);
};

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
      }}
    ><button
  onClick={onBack}
  style={{
    marginBottom: "20px",
    padding: "10px 20px",
    cursor: "pointer",
  }}
>
⬅ Back to Dashboard
</button>
      <h1>📖 PDF Notes</h1>

      {notes.map((note, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
          }}
        >
          <h3>{note.name}</h3>

          <div>
            <button
  onClick={() => window.open(note.link, "_blank")}
>
  👁 View
</button>

          <button
  onClick={() => window.open(note.link, "_blank")}
>
  ⬇ Download
</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PDFNotes;