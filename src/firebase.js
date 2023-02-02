//import firebase from './firebase'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCPMJ7tcEfc-x8MOXfCXpvtIhRPHitT8KM",
    authDomain: "netflix-app-64c41.firebaseapp.com",
    projectId: "netflix-app-64c41",
    storageBucket: "netflix-app-64c41.appspot.com",
    messagingSenderId: "233476213430",
    appId: "1:233476213430:web:f4952494a543a82afbf417"
  };

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
