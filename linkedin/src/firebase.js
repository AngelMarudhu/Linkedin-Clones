import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxpLb9tWlmz_QVvxXtadbtsiD24-LKYK4",
  authDomain: "linkedin-cne2.firebaseapp.com",
  projectId: "linkedin-cne2",
  storageBucket: "linkedin-cne2.appspot.com",
  messagingSenderId: "691555457771",
  appId: "1:691555457771:web:19faa6798514fc142bbcae",
  measurementId: "G-YCKJR1HE8E",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;
