// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-73bcc.firebaseapp.com",
  projectId: "mern-estate-73bcc",
  storageBucket: "mern-estate-73bcc.appspot.com",
  messagingSenderId: "998440208505",
  appId: "1:998440208505:web:1eebaf0ac5bbfb63d8aca8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);