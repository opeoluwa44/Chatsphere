import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRKSaLTWGiv6b5ptRM7KSe9LHKZlP23b8",
  authDomain: "chatsphere-eb1c1.firebaseapp.com",
  projectId: "chatsphere-eb1c1",
  storageBucket: "chatsphere-eb1c1.firebasestorage.app",
  messagingSenderId: "405574831644",
  appId: "1:405574831644:web:7a9790d391c80e4f0959d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);