import axios from "axios";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
const ADMIN_EMAIL = "shivsaini1794@gmail.com";

function Dashboard({
  user,
  isPremium,
  onStartTest,
  onStartMockTest,
  onOpenPDF,
  onOpenHistory,
  onOpenAdmin,
}) {
  const [mockTests, setMockTests] = useState([]);

  useEffect(() => {
    const loadTests = async () => {
      try {
        const snapshot = await getDocs(collection(db, "MockTests"));
        const counts = {};
        snapshot.docs.forEach((d) => {
          const t = d.data().test;
          if (t && t !== "free") counts[t] = (counts[t] || 0) + 1;
        });
        const tests = Object.entries(counts)
          .filter(([testName, count]) => /^mock\d+$/.test(testName) && count > 0)
          .sort((a, b) => parseInt(a[0].replace("mock", ""), 10) - parseInt(b[0].replace("mock", ""), 10));
        setMockTests(tests);
      } catch (err) { console.error(err); }
    };
    loadTests();
  }, []);
  const logout = () => {
    window.location.reload();
  };

  const buyPremium = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;
      if (!backendUrl || !razorpayKey) {
        alert("Payment setup abhi complete nahi hai. Backend URL aur Razorpay Key set karein.");
        return;
      }

      const token = await user.getIdToken();
      const { data } = await axios.post(`${backendUrl}/create-order`, { userId: user.uid }, { headers: { Authorization: `Bearer ${token}` } });

      const options = {
        key: razorpayKey,
        amount: data.amount,
        currency: data.currency,
        name: "RAILWAY LDCE MECHANICAL JE TEST SERIES",
        description: "Premium Membership",
        order_id: data.id,
        handler: async function (response) {
          try {
            const verify = await axios.post(`${backendUrl}/verify-payment`, response, { headers: { Authorization: `Bearer ${token}` } });
            if (!verify.data.verified) throw new Error("Payment verification failed");
            await updateDoc(doc(db, "users", user.uid), { premium: true, premiumActivatedAt: new Date().toISOString(), razorpayPaymentId: response.razorpay_payment_id });
            alert("🎉 Premium Activated");
            window.location.reload();
          } catch (e) {
            console.error(e);
            alert("Payment verify nahi ho paya. Premium activate nahi hua.");
          }
        },
        prefill: { name: user.displayName || "", email: user.email || "" },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", () => alert("❌ Payment failed. Dobara try karein."));
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Payment start nahi ho paya.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <h2>👤 Dashboard</h2>

      <p>
        <b>{user.displayName}</b>
      </p>

      <p>{user.email}</p>

      <p>
        Membership : {isPremium ? "💎 Premium" : "🆓 Free"}
      </p>

      {!isPremium && (
        <button onClick={buyPremium}>
          💎 Buy Premium
        </button>
      )}

      <hr />

      <h2>📝 Mock Tests</h2>

      <button
        style={{ width: "100%", margin: "8px 0" }}
        onClick={onStartTest}
      >
        🆓 Free Mock Test
      </button>

      {mockTests.map(([testName, count]) => (
        <button
          key={testName}
          style={{ width: "100%", margin: "8px 0" }}
          onClick={() => {
            if (!isPremium) {
              alert("🔒 Premium Required");
              return;
            }
            onStartMockTest(testName);
          }}
        >
          💎 Mock Test {testName.replace("mock", "")} ({Math.min(count, 100)} Questions)
        </button>
      ))}

      <hr />

      <h2>📊 Test History</h2>
      <button style={{ width: "100%", margin: "8px 0" }} onClick={onOpenHistory}>📊 View Test History</button>

      <hr />

      <h2>📖 PDF Notes</h2>

      <button
        style={{ width: "100%", margin: "8px 0" }}
        onClick={() => {
          if (!isPremium) {
            alert("🔒 Premium Membership Required");
            return;
          }

          onOpenPDF();
        }}
      >
        📖 Open PDF Notes
      </button>

      <hr />

      {user?.email === ADMIN_EMAIL && (
  <button
    style={{
      width: "100%",
      margin: "8px 0",
      background: "#222",
      color: "white",
    }}
    onClick={onOpenAdmin}
  >
    🛠 Admin Panel
  </button>
)}

      <button
        style={{
          width: "100%",
          background: "red",
          color: "white",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;