// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIwaCITWq_W7YngRBis0nOj_LtJiIRE8A",
  authDomain: "bayaton-mobile-app---tracker.firebaseapp.com",
  projectId: "bayaton-mobile-app---tracker",
  storageBucket: "bayaton-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "496154610643",
  appId: "1:496154610643:web:607d219b679be636e6bd26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);