// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd4TyA1ro-y4JK5hMmBDrM2sDOtCxEJcM",
  authDomain: "kodigo-api-2025.firebaseapp.com",
  projectId: "kodigo-api-2025",
  storageBucket: "kodigo-api-2025.firebasestorage.app",
  messagingSenderId: "1043382341388",
  appId: "1:1043382341388:web:f1349607c4a06ad77ac329"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
