// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXmFKxdzHV_WWDzDsPLYsMDXH3Xln267k",
    authDomain: "pharma-street.firebaseapp.com",
    databaseURL: "https://pharma-street-default-rtdb.firebaseio.com",
    projectId: "pharma-street",
    storageBucket: "pharma-street.appspot.com",
    messagingSenderId: "910430484237",
    appId: "1:910430484237:web:c9d023c1e9a7bfa2222244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };