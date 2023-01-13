import { getFirestore, Timestamp, FieldValue } from 'firebase/firestore'
import { 
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  collection,
  onSnapshot,
  orderBy,
  query } from 'firebase/firestore'
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRmwiHQULQpjfWm5fIs8dmxuccI5wfhHE",
  authDomain: "landlord-messaging-app.firebaseapp.com",
  projectId: "landlord-messaging-app",
  storageBucket: "landlord-messaging-app.appspot.com",
  messagingSenderId: "482099185499",
  appId: "1:482099185499:web:5b6088a9313e9c84dbbc7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export firestore
export const db = getFirestore(app)
export { doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc, setDoc, collection, onSnapshot, orderBy, query }