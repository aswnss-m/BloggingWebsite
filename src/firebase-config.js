// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqP9cF11VnnTe62i89ONEXTFeeCy_q9CM",
  authDomain: "blogpost-83045.firebaseapp.com",
  projectId: "blogpost-83045",
  storageBucket: "blogpost-83045.appspot.com",
  messagingSenderId: "1095991080322",
  appId: "1:1095991080322:web:fbdd0659e7616c0c0e4b9b",
  measurementId: "G-GVEL1VMRMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();
export const db = getFirestore(app);