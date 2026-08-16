import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
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

  // alert("Welcome " + user.displayName);
    onSuccess(user);
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔐 Login</h2>

      <button onClick={googleLogin}>
        Continue with Google
      </button>

      <br /><br />

      <button>
        Login with Mobile OTP
      </button>
    </div>
  );
}

export default Login;