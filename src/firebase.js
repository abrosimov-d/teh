// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_Epmp0640vMDyKPv_TuQt5mA_6_DH-0Q",
    authDomain: "react-teh.firebaseapp.com",
    projectId: "react-teh",
    storageBucket: "react-teh.appspot.com",
    messagingSenderId: "1063385745462",
    appId: "1:1063385745462:web:2540cadb39cc7984d9b097"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);