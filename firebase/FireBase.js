// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV9BF7QjfRTxQxow4kpztDV5H4qZaj7LA",
  authDomain: "my-first-react-app-bf622.firebaseapp.com",
  projectId: "my-first-react-app-bf622",
  storageBucket: "my-first-react-app-bf622.appspot.com",
  messagingSenderId: "393884215020",
  appId: "1:393884215020:web:477d74e5477ab6d4b767c9",
  measurementId: "G-67GK6KY6N6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
