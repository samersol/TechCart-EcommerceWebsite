// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0vGjpmwpLHKubKNQAe3HwNpm1CNgGOJ4",
  authDomain: "ecommerce-c6960.firebaseapp.com",
  projectId: "ecommerce-c6960",
  storageBucket: "ecommerce-c6960.appspot.com",
  messagingSenderId: "368154810417",
  appId: "1:368154810417:web:e2bb1123445dfdfeeb5d10",
  measurementId: "G-1SZ7WTPXTG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
