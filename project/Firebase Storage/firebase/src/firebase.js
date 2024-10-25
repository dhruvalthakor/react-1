import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAb67v0IabWlvONPJnb6r9B8aVR0b3VRe0",
  authDomain: "mybook-app-114db.firebaseapp.com",
  databaseURL: "https://mybook-app-114db-default-rtdb.firebaseio.com",
  projectId: "mybook-app-114db",
  storageBucket: "mybook-app-114db.appspot.com",
  messagingSenderId: "295471539699",
  appId: "1:295471539699:web:1bf7c81d85f9a610d41e86"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };