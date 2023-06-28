// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1YQVVDcdvQ6BzDPvFZsO7ZsZn053MMY",
  authDomain: "sion43235.firebaseapp.com",
  projectId: "sion43235",
  storageBucket: "sion43235.appspot.com",
  messagingSenderId: "1080611099225",
  appId: "1:1080611099225:web:a113772311377931bd9748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos= getFirestore(app)