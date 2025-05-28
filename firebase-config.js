// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUCpUU2l_QHVgP06U6cj6OatKMRHyZUQ",
  authDomain: "pollink-de-kekalda.firebaseapp.com",
  databaseURL: "https://pollink-de-kekalda-default-rtdb.firebaseio.com",
  projectId: "pollink-de-kekalda",
  storageBucket: "pollink-de-kekalda.firebasestorage.app",
  messagingSenderId: "623406856924",
  appId: "1:623406856924:web:f05365b8ea8634ad979219",
  measurementId: "G-RXVHX234FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);