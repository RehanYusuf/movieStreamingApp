// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvjakQTBRYaqjWOzbzSCk9HXjAUQblaL4",
  authDomain: "boreatwork.firebaseapp.com",
  projectId: "boreatwork",
  storageBucket: "boreatwork.firebasestorage.app",
  messagingSenderId: "598369035482",
  appId: "1:598369035482:web:6ea9569f607b3e9143b1e3",
  measurementId: "G-N989JJD7MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();