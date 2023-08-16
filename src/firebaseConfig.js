// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHSl-NjJEjM_BL5YmJbfhR7Ur0VoosA3Y",
  authDomain: "ecommerce-a24b9.firebaseapp.com",
  projectId: "ecommerce-a24b9",
  storageBucket: "ecommerce-a24b9.appspot.com",
  messagingSenderId: "68899507762",
  appId: "1:68899507762:web:823baaae31fa272818762b",
  measurementId: "G-GCDDKBD3SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);