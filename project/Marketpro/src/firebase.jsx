import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDhF3ti79o1NbbwTJacmF3KL88R9_CKIOo",
    authDomain: "wab-app-686c8.firebaseapp.com",
    projectId: "wab-app-686c8",
    storageBucket: "wab-app-686c8.appspot.com",
    messagingSenderId: "244253464023",
    appId: "1:244253464023:web:ae81f162dd8d30b9f4e792",
    databaseURL:"https://wab-app-686c8-default-rtdb.firebaseio.com"
  };


export  const app = initializeApp(firebaseConfig);