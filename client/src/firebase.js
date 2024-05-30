// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-956c9.firebaseapp.com",
  projectId: "mern-blog-956c9",
  storageBucket: "mern-blog-956c9.appspot.com",
  messagingSenderId: "821616686702",
  appId: "1:821616686702:web:df235b443cb912ecc9587f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
