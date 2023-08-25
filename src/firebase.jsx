import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLxuttGp-itoKvRCAr5zusl4i6jYuxdLc",
  authDomain: "chatapp-261f9.firebaseapp.com",
  projectId: "chatapp-261f9",
  storageBucket: "chatapp-261f9.appspot.com",
  messagingSenderId: "489519264963",
  appId: "1:489519264963:web:b496f89209449ea66d1e76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();

