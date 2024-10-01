// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYvp500DqgHhJQpd_a5B7cnw0rPEB7VKw",
  authDomain: "swing-jam.firebaseapp.com",
  projectId: "swing-jam",
  storageBucket: "swing-jam.appspot.com",
  messagingSenderId: "1046935049428",
  appId: "1:1046935049428:web:6beae5be2b2f0d9e96d741",
  measurementId: "G-EBYSM1F5YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);