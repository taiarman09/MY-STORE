import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8MnfpZpxw3sSG7upo7I0CYUilWfSva1I",
  authDomain: "my-store-dc2db.firebaseapp.com",
  projectId: "my-store-dc2db",
  storageBucket: "my-store-dc2db.firebasestorage.app",
  messagingSenderId: "388786977007",
  appId: "1:388786977007:web:af8b19446cecd30cae031a",
  measurementId: "G-P2W8F8RE2Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();