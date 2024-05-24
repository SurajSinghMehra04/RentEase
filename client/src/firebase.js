// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cozeynest-3c464.firebaseapp.com",
  projectId: "cozeynest-3c464",
  storageBucket: "cozeynest-3c464.appspot.com",
  messagingSenderId: "312426466803",
  appId: "1:312426466803:web:cc3999f7b25c2ac46ad686"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);