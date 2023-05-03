import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvI9hdAxPXsTjyVgDHpUS9Wcnh4S7diOI",
    authDomain: "hotel-customer-relations-1a91c.firebaseapp.com",
    projectId: "hotel-customer-relations-1a91c",
    storageBucket: "hotel-customer-relations-1a91c.appspot.com",
    messagingSenderId: "385993084771",
    appId: "1:385993084771:web:4e791429ef294b9e3b8d56"
};

const app =  initializeApp(firebaseConfig);

//export const storage = getStorage(app);
//export const db = getFirestore(app);
//export const auth = getAuth(app);

// a file with the firebase connection using firebase.initializeApp (firebaseConfig) and getting references to database entities:

const databaseRef = firebase.database (). ref ();

 export const roomsRef = databaseRef.child('Rooms'); // rooms

export const accountsRef = databaseRef.child ('Accounts') ;  // accounts
