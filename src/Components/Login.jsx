import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          premium: false,
          createdAt: new Date().toISOString()
        });
      }

      onSuccess(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const emailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: "Razorpay Test User",
          email: user.email,
          premium: false,
          createdAt: new Date().toISOString()
        });
      }

      onSuccess(user);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔐 Login</h2>

      <button onClick={googleLogin}>
        Continue with Google
      </button>

      <br /><br />

      <h3>Razorpay Test Login</h3>

      <input
        type="email"
        placeholder="Test Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />

      <br />

      <input
        type="password"
        placeholder="Test Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />

      <br />

      <button onClick={emailLogin}>
        Login for Razorpay Test
      </button>
    </div>
  );
}

export default Login;
