import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnEEtso8B4v6bcGX0qPFkaZmCpn8xZSaA",
  authDomain: "instageam-clone-66d7d.firebaseapp.com",
  projectId: "instageam-clone-66d7d",
  storageBucket: "instageam-clone-66d7d.appspot.com",
  messagingSenderId: "672151966718",
  appId: "1:672151966718:web:ae4ffda9aa069ba43326af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();