// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1deab.firebaseapp.com",
  projectId: "blog-1deab",
  storageBucket: "blog-1deab.firebasestorage.app",
  messagingSenderId: "179389749466",
  appId: "1:179389749466:web:251a5751a2852fee6cede3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);