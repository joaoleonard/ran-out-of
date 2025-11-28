import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNXFt2sUCKsBQ9o-WBGNe3oMyf9thMdE0",
    authDomain: "ran-out-of-1bf1b.firebaseapp.com",
    projectId: "ran-out-of-1bf1b",
    storageBucket: "ran-out-of-1bf1b.firebasestorage.app",
    messagingSenderId: "991984693808",
    appId: "1:991984693808:web:06a0911422fc27d44cf3f5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);