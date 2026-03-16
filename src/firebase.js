import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd5LOCxWWJyjPMz7ogU9PHVWouK1I11oA",
  authDomain: "portfolio-bb04e.firebaseapp.com",
  projectId: "portfolio-bb04e",
  storageBucket: "portfolio-bb04e.firebasestorage.app",
  messagingSenderId: "523377252603",
  appId: "1:523377252603:web:8d66edfbeee4dec7f2b85e",
  measurementId: "G-0ZL1V0VP4G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);