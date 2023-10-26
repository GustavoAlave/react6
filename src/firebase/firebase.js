// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDocs, query, where, getDoc, deleteDoc, updateDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJS_McbhC3qoM6bvt1w9BOkG3xwP0FSPk",
  authDomain: "proyect-react-6.firebaseapp.com",
  projectId: "proyect-react-6",
  storageBucket: "proyect-react-6.appspot.com",
  messagingSenderId: "793019235358",
  appId: "1:793019235358:web:0bb44022b6c7f0f224420f",
  measurementId: "G-THQFRNQFES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);                                                  

const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);


