// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ0qgT8P_vsclqRKn6v6Nvz5jwwwAEn0M",
  authDomain: "chat-io-38cad.firebaseapp.com",
  projectId: "chat-io-38cad",
  storageBucket: "chat-io-38cad.appspot.com",
  messagingSenderId: "14313172558",
  appId: "1:14313172558:web:85506c08b2e4e901ed9d1f",
  measurementId: "G-K8DTK0N22H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
