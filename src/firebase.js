import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDebs9PZTi0lG1LXnTu8d3wzYVmiCbJvxU",
  authDomain: "saini-ldce-mechanical-je-test.firebaseapp.com",
  projectId: "saini-ldce-mechanical-je-test",
  storageBucket: "saini-ldce-mechanical-je-test.firebasestorage.app",
  messagingSenderId: "625826958986",
  appId: "1:625826958986:web:ae1b4ba6bb8619e0716773",
  measurementId: "G-WS767MG8KH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);