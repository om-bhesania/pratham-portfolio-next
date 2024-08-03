// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJPiEaRJnVyLrBt0ZrmZZmvA3Tajzd--4",
  authDomain: "pratham-portfolio-bfcbd.firebaseapp.com",
  projectId: "pratham-portfolio-bfcbd",
  storageBucket: "pratham-portfolio-bfcbd.appspot.com",
  messagingSenderId: "867983635768",
  appId: "1:867983635768:web:7d4d0c70f4b96931197dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };