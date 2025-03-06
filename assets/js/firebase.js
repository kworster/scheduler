import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAbLefRO7pNCWYvmLtP7jaYZgJVTpURCRk",
  authDomain: "scheduler-13980.firebaseapp.com",
  projectId: "scheduler-13980",
  storageBucket: "scheduler-13980.firebasestorage.app",
  messagingSenderId: "853608682087",
  appId: "1:853608682087:web:9d0c4898b2f0f9040cbac2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();