import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCMvqLMIiJR5tjrMrqAaYPdsx4Z1r7JUG0",
  authDomain: "cosmicways-befb0.firebaseapp.com",
  projectId: "cosmicways-befb0",
  storageBucket: "cosmicways-befb0.appspot.com",
  messagingSenderId: "542774619978",
  appId: "1:542774619978:web:fc3106837f19f234515bb3",
  measurementId: "G-JD4X9FP1C7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs };
