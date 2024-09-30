// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wduzMKzijzRZFaXyF2uLRZw42EiHH6E",
  authDomain: "auto-mart-e6cc3.firebaseapp.com",
  projectId: "auto-mart-e6cc3",
  storageBucket: "auto-mart-e6cc3.appspot.com",
  messagingSenderId: "223881257922",
  appId: "1:223881257922:web:71466f7e06085a8dbaec5b",
  measurementId: "G-PHJKV7H63E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
