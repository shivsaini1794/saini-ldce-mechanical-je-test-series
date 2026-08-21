import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Papa from "papaparse";

import mockTest1 from "../data/tests/mockTest1";
import mockTest2 from "../data/mockTest2";

function Admin({ onBack }) {
  const [selectedTest, setSelectedTest] = useState("free");
  const [questionList, setQuestionList] = useState([]);
  const [editId, setEditId] = useState(null);

  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  const [pdfName, setPdfName] = useState("");
  const [pdfLink, setPdfLink] = useState("");

  const [bulkText, setBulkText] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [testOptions, setTestOptions] = useState([]);
  const [bulkTest, setBulkTest] = useState("auto");

  // Premium User
  const [premiumEmail, setPremiumEmail] = useState("");

  const normalizeQuestion = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  const loadTestOptions = async () => {
    const snapshot = await getDocs(collection(db, "MockTests"));

    const tests = [
      ...new Set(
        snapshot.docs.map((d) => d.data().test).filter(Boolean)
      ),
    ];

    const known = [
      "free",
      ...Array.from({ length: 20 }, (_, i) => `mock${i + 1}`),
    ];

    setTestOptions([
      ...new Set([...known.filter((x) => tests.includes(x)), ...tests]),
    ]);
  };

  const getNextAutoTest = (allDocs) => {
    const counts = {};

    allDocs.forEach((d) => {
      const t = d.data().test;
      if (t) counts[t] = (counts[t] || 0) + 1;
    });

    for (let n = 1; n <= 1000; n++) {
      const id = `mock${n}`;
      if ((counts[id] || 0) < 100) return id;
    }

    return `mock${Object.keys(counts).length + 1}`;
  };

  // Load Questions
  const loadQuestions = async () => {
    const snapshot = await getDocs(collection(db, "MockTests"));

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setQuestionList(list);
    await loadTestOptions();
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    loadQuestions();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  // Delete Question
  const deleteQuestion = async (id) => {
    if (!window.confirm("Delete this question?")) return;

    try {
      await deleteDoc(doc(db, "MockTests", id));

      alert("✅ Question Deleted");

      loadQuestions();
    } catch (err) {
      console.log(err);
      alert("❌ Delete Failed");
    }
  };

  // Save / Update Question
  const saveQuestion = async () => {
    try {
      const cleanQuestion = question.trim();

      if (
        !cleanQuestion ||
        !optionA.trim() ||
        !optionB.trim() ||
        !optionC.trim() ||
        !optionD.trim() ||
        !answer.trim()
      ) {
        alert("⚠️ Question, all options aur answer bharna zaroori hai");
        return;
      }

      const snapshot = await getDocs(collection(db, "MockTests"));

      const duplicate = snapshot.docs.find((d) => {
        if (editId && d.id === editId) return false;

        return (
          normalizeQuestion(d.data().question) ===
          normalizeQuestion(cleanQuestion)
        );
      });

      if (duplicate) {
        alert(
          "⚠️ Duplicate Question! Ye question pehle se question bank me hai."
        );
        return;
      }

      let targetTest = selectedTest;

      if (targetTest === "auto") {
        targetTest = getNextAutoTest(snapshot.docs);
      }

      if (editId) {
        const oldTest = snapshot.docs.find(
          (d) => d.id === editId
        )?.data().test;

        if (
          targetTest !== oldTest &&
          targetTest !== "free"
        ) {
          const targetCount = snapshot.docs.filter(
            (d) =>
              d.data().test === targetTest &&
              d.id !== editId
          ).length;

          if (targetCount >= 100) {
            alert(
              "⚠️ Ye Mock Test already 100 questions ka hai. Agla Mock Test select karein."
            );
            return;
          }
        }

        await updateDoc(doc(db, "MockTests", editId), {
          test: targetTest,
          question: cleanQuestion,
          optionA: optionA.trim(),
          optionB: optionB.trim(),
          optionC: optionC.trim(),
          optionD: optionD.trim(),
          answer: answer.trim(),
        });

        alert("✅ Question Updated");
        setEditId(null);
      } else {
        const sameTestCount = snapshot.docs.filter(
          (d) => d.data().test === targetTest
        ).length;

        if (sameTestCount >= 100) {
          targetTest = `mock${Math.floor(sameTestCount / 100) + 1}`;
        }

        await addDoc(collection(db, "MockTests"), {
          test: targetTest,
          question: cleanQuestion,
          optionA: optionA.trim(),
          optionB: optionB.trim(),
          optionC: optionC.trim(),
          optionD: optionD.trim(),
          answer: answer.trim(),
        });

        alert(
          `✅ Question Added to ${
            targetTest === "free"
              ? "Free Mock Test"
              : targetTest.replace("mock", "Mock Test ")
          }`
        );
      }

      await loadQuestions();

      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setAnswer("");
    } catch (err) {
      console.log(err);
      alert("❌ Save Failed");
    }
  };

  // Edit Question
  const editQuestion = (q) => {
    setEditId(q.id);

    setQuestion(q.question);
    setOptionA(q.optionA);
    setOptionB(q.optionB);
    setOptionC(q.optionC);
    setOptionD(q.optionD);
    setAnswer(q.answer);

    setSelectedTest(q.test || "auto");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Save PDF
  const savePDF = async () => {
    if (!pdfName || !pdfLink) {
      alert("PDF Name aur Link dalo");
      return;
    }

    try {
      await addDoc(collection(db, "PDFs"), {
        name: pdfName,
        link: pdfLink,
        createdAt: Date.now(),
      });

      alert("✅ PDF Saved");

      setPdfName("");
      setPdfLink("");
    } catch (err) {
      console.log(err);
      alert("❌ PDF Save Failed");
    }
  };

  // Import Existing Questions
  const importExistingQuestions = async () => {
    try {
      const snapshot = await getDocs(collection(db, "MockTests"));

      const existing = new Set(
        snapshot.docs.map((d) =>
          normalizeQuestion(d.data().question)
        )
      );

      const batch = writeBatch(db);

      let added = 0;
      let skipped = 0;

      let workingDocs = [...snapshot.docs];

      [...mockTest1, ...mockTest2].forEach((q) => {
        const text = normalizeQuestion(q.question);

        if (!text || existing.has(text)) {
          skipped++;
          return;
        }

        const test = getNextAutoTest(workingDocs);

        const ref = doc(collection(db, "MockTests"));

        batch.set(ref, {
          test,
          question: q.question,
          optionA: q.options[0],
          optionB: q.options[1],
          optionC: q.options[2],
          optionD: q.options[3],
          answer: q.answer,
        });

        existing.add(text);

        workingDocs = [
          ...workingDocs,
          {
            data: () => ({ test }),
          },
        ];

        added++;
      });

      if (added) await batch.commit();

      alert(
        `✅ Imported: ${added} | Skipped duplicate: ${skipped}`
      );

      await loadQuestions();
    } catch (err) {
      console.log(err);
      alert("❌ Import Failed");
    }
  };

  // Import Bulk Questions
  const importQuestions = async () => {
    try {
      const text = bulkText.trim();

      if (!text) {
        alert("⚠️ Questions paste karo");
        return;
      }

      const snapshot = await getDocs(collection(db, "MockTests"));

      const existing = new Set(
        snapshot.docs
          .map((d) =>
            normalizeQuestion(d.data().question)
          )
          .filter(Boolean)
      );

      const blocks = text
        .split(/\n\s*\n/)
        .map((b) => b.trim())
        .filter(Boolean);

      const batch = writeBatch(db);

      let workingDocs = [...snapshot.docs];

      let added = 0;
      let skipped = 0;
      let invalid = 0;

      for (const block of blocks) {
        const lines = block
          .split(/\r?\n/)
          .map((x) => x.trim())
          .filter(Boolean);

        if (lines.length < 6) {
          invalid++;
          continue;
        }

        const qText = lines[0]
          .replace(/^Question\s*:\s*/i, "")
          .trim();

        const a = lines[1]
          .replace(/^A[.)]\s*/i, "")
          .trim();

        const b = lines[2]
          .replace(/^B[.)]\s*/i, "")
          .trim();

        const c = lines[3]
          .replace(/^C[.)]\s*/i, "")
          .trim();

        const d = lines[4]
          .replace(/^D[.)]\s*/i, "")
          .trim();

        const ans = lines[5]
          .replace(/^Answer\s*:\s*/i, "")
          .trim();

        const key = normalizeQuestion(qText);

        if (!key || !a || !b || !c || !d || !ans) {
          invalid++;
          continue;
        }

        if (existing.has(key)) {
          skipped++;
          continue;
        }

        let targetTest = bulkTest;

        if (targetTest === "auto") {
          targetTest = getNextAutoTest(workingDocs);
        } else if (targetTest !== "free") {
          const count = workingDocs.filter(
            (x) => x.data().test === targetTest
          ).length;

          if (count >= 100) {
            targetTest = `mock${
              parseInt(targetTest.replace("mock", ""), 10) + 1
            }`;
          }
        }

        const ref = doc(collection(db, "MockTests"));

        batch.set(ref, {
          test: targetTest,
          question: qText,
          optionA: a,
          optionB: b,
          optionC: c,
          optionD: d,
          answer: ans,
        });

        existing.add(key);

        workingDocs.push({
          data: () => ({ test: targetTest }),
        });

        added++;
      }

      if (!added) {
        alert(
          `⚠️ Import nahi hua. Duplicate: ${skipped}, Invalid: ${invalid}`
        );
        return;
      }

      await batch.commit();

      alert(
        `✅ Imported: ${added} | Duplicate skipped: ${skipped} | Invalid skipped: ${invalid}`
      );

      setBulkText("");

      await loadQuestions();
    } catch (err) {
      console.log(err);
      alert("❌ Bulk Import Failed");
    }
  };

  // Rebuild All Mock Tests
  const rebuildAllMockTests = async () => {
    if (
      !window.confirm(
        "318/saare paid questions ko dobara 100-100 ke Mock Tests me arrange karna hai? Free Mock Test ko nahi badla jayega."
      )
    )
      return;

    try {
      const snapshot = await getDocs(
        collection(db, "MockTests")
      );

      const allDocs = snapshot.docs;

      const paidDocs = allDocs.filter((d) => {
        const t = d.data().test;
        return /^mock\d+$/.test(t || "");
      });

      const seen = new Set();
      const uniqueDocs = [];
      let duplicates = 0;

      for (const d of paidDocs) {
        const key = normalizeQuestion(
          d.data().question
        );

        if (!key || seen.has(key)) {
          duplicates++;
          continue;
        }

        seen.add(key);
        uniqueDocs.push(d);
      }

      const batch = writeBatch(db);

      uniqueDocs.forEach((d, index) => {
        const test = `mock${Math.floor(index / 100) + 1}`;

        batch.update(
          doc(db, "MockTests", d.id),
          { test }
        );
      });

      if (uniqueDocs.length) {
        await batch.commit();
      }

      const counts = {};

      uniqueDocs.forEach((_, index) => {
        const test = `mock${Math.floor(index / 100) + 1}`;

        counts[test] = (counts[test] || 0) + 1;
      });

      alert(
        `✅ Mock Tests rebuild ho gaye\n${Object.entries(
          counts
        )
          .map(
            ([t, c]) =>
              `${t.replace("mock", "Mock Test ")}: ${c}`
          )
          .join("\n")}\n\nDuplicate/invalid skipped: ${duplicates}`
      );

      await loadQuestions();
    } catch (err) {
      console.log(err);
      alert("❌ Rebuild Failed");
    }
  };

  // Repair Unassigned Questions
  const repairUnassignedQuestions = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "MockTests")
      );

      const unassigned = snapshot.docs.filter(
        (d) => !d.data().test
      );

      if (!unassigned.length) {
        alert("✅ Koi unassigned question nahi hai");
        return;
      }

      const batch = writeBatch(db);

      const working = snapshot.docs.filter(
        (d) => d.data().test
      );

      unassigned.forEach((d) => {
        const test = getNextAutoTest(working);

        batch.update(
          doc(db, "MockTests", d.id),
          { test }
        );

        working.push({
          data: () => ({ test }),
        });
      });

      await batch.commit();

      alert(
        `✅ ${unassigned.length} unassigned questions ko Mock Tests me assign kar diya.`
      );

      await loadQuestions();
    } catch (err) {
      console.log(err);
      alert("❌ Repair Failed");
    }
  };

  // =========================================================
  // ADD PREMIUM USER
  // =========================================================
  const addPremiumUser = async () => {
    const email = premiumEmail.trim().toLowerCase();

    if (!email) {
      alert("⚠️ User ka registered email dalo");
      return;
    }

    try {
      const snapshot = await getDocs(
        collection(db, "users")
      );

      const userDoc = snapshot.docs.find(
        (d) =>
          String(d.data().email || "")
            .trim()
            .toLowerCase() === email
      );

      if (!userDoc) {
        alert(
          "❌ Is email ka user website par registered nahi hai."
        );
        return;
      }

      await updateDoc(
        doc(db, "users", userDoc.id),
        {
          premium: true,
        }
      );

      alert(
        "🎉 Premium successfully activate ho gaya."
      );

      setPremiumEmail("");
    } catch (err) {
      console.error(err);
      alert(
        "❌ Premium activate nahi ho paya."
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
        }}
      >
        ⬅ Back to Dashboard
      </button>

      <h1>🛠 Admin Panel</h1>

      <hr />

      <h2>
        {editId
          ? "✏️ Edit Question"
          : "➕ Add New Question"}
      </h2>

      <select
        value={selectedTest}
        onChange={(e) =>
          setSelectedTest(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <option value="auto">
          ⚡ Auto (100 questions per Mock Test)
        </option>

        <option value="free">
          🆓 Free Mock Test
        </option>

        {testOptions
          .filter((t) => t !== "free")
          .map((t) => (
            <option key={t} value={t}>
              📝 Mock Test {t.replace("mock", "")}
            </option>
          ))}
      </select>

      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Option A"
        value={optionA}
        onChange={(e) =>
          setOptionA(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Option B"
        value={optionB}
        onChange={(e) =>
          setOptionB(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Option C"
        value={optionC}
        onChange={(e) =>
          setOptionC(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Option D"
        value={optionD}
        onChange={(e) =>
          setOptionD(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Correct Answer"
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
      />

      <button
        onClick={saveQuestion}
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
        }}
      >
        {editId
          ? "💾 Update Question"
          : "➕ Add Question"}
      </button>

      <hr />

      <h2>📄 Upload PDF</h2>

      <input
        type="text"
        placeholder="PDF Name"
        value={pdfName}
        onChange={(e) =>
          setPdfName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="GitHub PDF Link"
        value={pdfLink}
        onChange={(e) =>
          setPdfLink(e.target.value)
        }
      />

      <button
        onClick={savePDF}
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "15px",
        }}
      >
        📄 Save PDF
      </button>

      <hr />

      <h2>📥 Import Questions</h2>

      <select
        value={bulkTest}
        onChange={(e) =>
          setBulkTest(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <option value="auto">
          ⚡ Auto: 100 questions per Mock Test
        </option>

        <option value="free">
          🆓 Free Mock Test
        </option>

        {testOptions
          .filter((t) => t !== "free")
          .map((t) => (
            <option key={t} value={t}>
              📝 Mock Test {t.replace("mock", "")}
            </option>
          ))}
      </select>

      <textarea
        rows="8"
        placeholder="Paste Bulk Questions Here..."
        value={bulkText}
        onChange={(e) =>
          setBulkText(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={importQuestions}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        📥 Import Bulk Questions
      </button>

      <button
        onClick={repairUnassignedQuestions}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "10px",
          background: "#ff9800",
          color: "white",
          border: "none",
        }}
      >
        🛠 Repair Unassigned Questions
      </button>

      <button
        onClick={rebuildAllMockTests}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "10px",
          background: "#1565c0",
          color: "white",
          border: "none",
        }}
      >
        🔄 Rebuild Mock Tests (100 Questions Each)
      </button>

      <button
        onClick={importExistingQuestions}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        📚 Import Existing Questions
      </button>

      <hr />

      {/* =====================================================
          PREMIUM USER MANAGEMENT
      ====================================================== */}

      <h2>💎 Premium User Management</h2>

      <p>
        Registered user ka email डालकर बिना payment के
        Premium activate करें।
      </p>

      <input
        type="email"
        placeholder="User ka registered email"
        value={premiumEmail}
        onChange={(e) =>
          setPremiumEmail(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={addPremiumUser}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          background: "#9C27B0",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        💎 Add Premium User
      </button>

      <hr />

      <h2>
        📋 All Questions ({questionList.length})
      </h2>

      {questionList.map((q) => (
        <div
          key={q.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            background: "#fafafa",
          }}
        >
          <h4>{q.question}</h4>

          <p>
            A. {q.optionA}
            <br />
            B. {q.optionB}
            <br />
            C. {q.optionC}
            <br />
            D. {q.optionD}
          </p>

          <b>
            ✅ Answer : {q.answer}
          </b>

          <br />
          <br />

          <button
            onClick={() => editQuestion(q)}
            style={{
              background: "#2196F3",
              color: "white",
              border: "none",
              padding: "8px 15px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            ✏️ Edit
          </button>

          <button
            onClick={() =>
              deleteQuestion(q.id)
            }
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            🗑 Delete
          </button>
        </div>
      ))}

      <hr />

      <input
        type="file"
        accept=".csv"
        onChange={(e) =>
          setCsvFile(e.target.files[0])
        }
      />

      <button
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "10px",
        }}
        onClick={() => {
          if (!csvFile) {
            alert("Please Select CSV File");
            return;
          }

          Papa.parse(csvFile, {
            header: true,

            complete: async function (results) {
              try {
                const snapshot = await getDocs(
                  collection(db, "MockTests")
                );

                const existing = new Set(
                  snapshot.docs
                    .map((d) =>
                      normalizeQuestion(
                        d.data().question
                      )
                    )
                    .filter(Boolean)
                );

                const batch = writeBatch(db);

                let added = 0;
                let skipped = 0;

                let workingDocs = [...snapshot.docs];

                for (const row of results.data) {
                  if (!row.question) continue;

                  const key =
                    normalizeQuestion(
                      row.question
                    );

                  if (existing.has(key)) {
                    skipped++;
                    continue;
                  }

                  let targetTest =
                    bulkTest === "auto"
                      ? getNextAutoTest(workingDocs)
                      : bulkTest;

                  if (targetTest !== "free") {
                    const count =
                      workingDocs.filter(
                        (x) =>
                          x.data().test ===
                          targetTest
                      ).length;

                    if (count >= 100) {
                      targetTest =
                        getNextAutoTest(
                          workingDocs
                        );
                    }
                  }

                  const ref = doc(
                    collection(
                      db,
                      "MockTests"
                    )
                  );

                  batch.set(ref, {
                    test: targetTest,
                    question:
                      row.question.trim(),
                    optionA:
                      row.optionA?.trim() || "",
                    optionB:
                      row.optionB?.trim() || "",
                    optionC:
                      row.optionC?.trim() || "",
                    optionD:
                      row.optionD?.trim() || "",
                    answer:
                      row.answer?.trim() || "",
                  });

                  existing.add(key);

                  workingDocs.push({
                    data: () => ({
                      test: targetTest,
                    }),
                  });

                  added++;
                }

                if (added)
                  await batch.commit();

                alert(
                  `✅ CSV Imported: ${added} | Duplicate skipped: ${skipped}`
                );

                loadQuestions();
              } catch (err) {
                console.log(err);
                alert(
                  "❌ CSV Import Failed"
                );
              }
            },
          });
        }}
      >
        📂 Import CSV
      </button>
    </div>
  );
}

export default Admin;
