import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MockTest from "./Components/MockTest";
import Result from "./Components/Result";
import PDFNotes from "./Components/PDFNotes";
import TestHistory from "./Components/TestHistory";
import { doc, getDoc, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Admin from "./Components/Admin";

function App() {
  const [startTest, setStartTest] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionLoadError, setQuestionLoadError] = useState("");
  const [showPDF, setShowPDF] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [currentTestName, setCurrentTestName] = useState("free");

  const startMockTest = () => setShowLogin(true);
const buyPremium = async () => {
  if (!user) {
    setShowLogin(true);
    return;
  }

  try {
    const scriptLoaded = await new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

    if (!scriptLoaded) {
      alert("❌ Razorpay load nahi ho pa raha.");
      return;
    }

    const response = await fetch(
      "YOUR_BACKEND_URL/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.uid,
        }),
      }
    );

    const order = await response.json();

    if (!response.ok || !order.id) {
      alert("❌ Order create nahi ho paaya.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: order.amount,
      currency: "INR",
      name: "SAINI LDCE MECHANICAL JE",
      description: "Premium Test Series",
      order_id: order.id,

      handler: async function (paymentResponse) {
        try {
          const verifyResponse = await fetch(
            "YOUR_BACKEND_URL/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(paymentResponse),
            }
          );

          const result = await verifyResponse.json();

          if (result.verified) {
            alert("🎉 Payment Successful! Premium Activated.");

            setIsPremium(true);
          } else {
            alert("❌ Payment verification failed.");
          }
        } catch (error) {
          console.error(error);
          alert("❌ Payment verification error.");
        }
      },

      prefill: {
        name: user.displayName || "",
        email: user.email || "",
      },

      theme: {
        color: "#1976d2",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Premium payment error:", error);
    alert("❌ Payment start nahi ho paaya.");
  }
};
  const loadQuestionsFromFirebase = async (testName) => {
    try {
      setQuestionLoadError("");
      const snapshot = await getDocs(collection(db, "MockTests"));
      const seen = new Set();
      const data = snapshot.docs
        .filter((d) => d.data().test === testName)
        .map((d) => ({
          id: d.id,
          question: d.data().question,
          options: [d.data().optionA, d.data().optionB, d.data().optionC, d.data().optionD],
          answer: d.data().answer,
        }))
        .filter((q) => {
          const key = String(q.question || "").toLowerCase().replace(/\s+/g, " ").trim();
          if (!key || seen.has(key)) return false;
          seen.add(key);
          return q.options.every(Boolean) && q.answer;
        });
      if (!data.length) {
        setQuestions([]);
        setQuestionLoadError("Is Mock Test me abhi koi valid question nahi hai.");
        return false;
      }
      setQuestions(data);
      setCurrentTestName(testName);
      return true;
    } catch (err) {
      console.error(err);
      setQuestions([]);
      setQuestionLoadError("Questions load nahi ho pa rahe. Internet/Firebase connection check karein.");
      return false;
    }
  };

  const beginTest = async (testName) => {
    if (await loadQuestionsFromFirebase(testName)) {
      setTestCompleted(false);
      setStartTest(true);
      setShowHistory(false);
    }
  };

  const finishTest = async (finalScore, studentAnswers = {}) => {
    setScore(finalScore);
    setStartTest(false);
    setTestCompleted(true);
    if (user) {
      const total = questions.length;
      try {
        await addDoc(collection(db, "TestHistory"), {
          userId: user.uid,
          testName: currentTestName,
          score: finalScore,
          totalQuestions: total,
          correct: finalScore,
          wrong: total - finalScore,
          percentage: total ? Math.round((finalScore / total) * 100) : 0,
questions: questions.map((q, index) => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.answer,
  studentAnswer: studentAnswers[index] || "",
})),          
expiresAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
createdAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error("History save error", e);
      }
    }
  };

  const retest = async (testName) => {
    setTestCompleted(false);
    await beginTest(testName || currentTestName);
  };

  const dashboard = () => {
    setStartTest(false);
    setTestCompleted(false);
    setShowPDF(false);
    setShowAdmin(false);
    setShowHistory(false);
  };

  const loginSuccess = async (loggedInUser) => {
    const userRef = doc(db, "users", loggedInUser.uid);
    const userSnap = await getDoc(userRef);
    let premium = false;
    if (userSnap.exists()) premium = !!userSnap.data().premium;
    setUser(loggedInUser);
    setIsPremium(premium);
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Header user={user} />
      {questionLoadError && !startTest && !showLogin && !showHistory && (
        <div style={{ maxWidth: "700px", margin: "20px auto", padding: "15px", background: "#fff3cd", borderRadius: "8px" }}>⚠️ {questionLoadError}</div>
      )}

      {user && !startTest && !testCompleted && !showPDF && !showAdmin && !showHistory && (
        <Dashboard
          user={user}
          isPremium={isPremium}
          onStartTest={() => beginTest("free")}
          onStartMockTest={beginTest}
          onOpenPDF={() => setShowPDF(true)}
          onOpenHistory={() => setShowHistory(true)}
          onOpenAdmin={() => setShowAdmin(true)}
        />
      )}

      {!user && !startTest && !testCompleted && !showLogin && (
  <Home
    onStartTest={startMockTest}
    onLogin={() => setShowLogin(true)}
    onBuyPremium={buyPremium}
    isPremium={isPremium}
  />
)}
      {showLogin && <Login onSuccess={loginSuccess} />}
      {startTest && <MockTest questions={questions} testName={currentTestName === "free" ? "Free Mock Test" : `Mock Test ${currentTestName.replace("mock", "")}`} onFinish={finishTest} />}
      {showPDF && <PDFNotes onBack={dashboard} />}
      {showHistory && <TestHistory user={user} onRetest={retest} onBack={dashboard} />}
      {showAdmin && <Admin onBack={dashboard} />}
      {testCompleted && <Result score={score} totalQuestions={questions.length} testName={currentTestName === "free" ? "Free Mock Test" : `Mock Test ${currentTestName.replace("mock", "")}`} onRetest={retest} onBack={dashboard} />}
    </div>
  );
}

export default App;
