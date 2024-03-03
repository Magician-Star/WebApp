// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuggE2maTC_O459iHvZwnKUwLvshDaIMw",
  authDomain: "webjs-16eef.firebaseapp.com",
  projectId: "webjs-16eef",
  storageBucket: "webjs-16eef.appspot.com",
  messagingSenderId: "31333933535",
  appId: "1:31333933535:web:a51ef44a9dd0b19c1ea46a",
  measurementId: "G-9ZP1FRRFS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);