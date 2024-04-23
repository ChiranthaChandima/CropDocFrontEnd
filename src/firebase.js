import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "plant-leaf-63fd8.firebaseapp.com",
  projectId: "plant-leaf-63fd8",
  storageBucket: "plant-leaf-63fd8.appspot.com",
  messagingSenderId: "915382994319",
  appId: "1:915382994319:web:01fa0efc6e75aa3cc437fa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
