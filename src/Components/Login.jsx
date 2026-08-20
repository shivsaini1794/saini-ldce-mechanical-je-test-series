import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Login({ onSuccess }) {
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
      console.error("Google Login Error:", error);
      alert(error.message || "Google Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔐 Login</h2>

      <button onClick={googleLogin}>
        Continue with Google
      </button>
    </div>
  );
}

export default Login;
