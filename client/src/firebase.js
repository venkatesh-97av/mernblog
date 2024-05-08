// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern0blog-app.firebaseapp.com",
  projectId: "mern0blog-app",
  storageBucket: "mern0blog-app.appspot.com",
  messagingSenderId: "246715631000",
  appId: "1:246715631000:web:56a74af8eb1a492ee557ed",
  measurementId: "G-GCSWYVTJLW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
