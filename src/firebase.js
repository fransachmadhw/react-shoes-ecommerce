// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABcEaFdXjwwRCHj4GzOILe7R0cvT7Vf6E",
  authDomain: "react-ecommerce-aafd3.firebaseapp.com",
  projectId: "react-ecommerce-aafd3",
  storageBucket: "react-ecommerce-aafd3.appspot.com",
  messagingSenderId: "955659035469",
  appId: "1:955659035469:web:d69306883a210d22b4cd04",
  measurementId: "G-XFEC0R5XS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);