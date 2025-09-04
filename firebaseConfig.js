// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgll4pbQbAgluEOvbcYZT6Tn1hUrZwK94",
  authDomain: "mobile-app-tracker-bayaton.firebaseapp.com",
  projectId: "mobile-app-tracker-bayaton",
  storageBucket: "mobile-app-tracker-bayaton.firebasestorage.app",
  messagingSenderId: "260963063097",
  appId: "1:260963063097:web:0afe8f59b336b3afb484e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);