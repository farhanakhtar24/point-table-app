import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1mQYbVCatqYfztNbH3B2utFj_J9KOmCo",
    authDomain: "points-table-app-8942e.firebaseapp.com",
    projectId: "points-table-app-8942e",
    storageBucket: "points-table-app-8942e.appspot.com",
    messagingSenderId: "981596119826",
    appId: "1:981596119826:web:617a7df9b3485a330fc9cb",
    measurementId: "G-M1NYHZQKKQ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);