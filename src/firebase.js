// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8iDB_LNHj3_sh4ZJETwQfn4_V5opiw_Q",
  authDomain: "biblioteca-de-cuadros.firebaseapp.com",
  projectId: "biblioteca-de-cuadros",
  storageBucket: "biblioteca-de-cuadros.appspot.com",
  messagingSenderId: "784035508128",
  appId: "1:784035508128:web:e89f13ab4f5572bd387ec5",
  measurementId: "G-4WP9VV99F8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const db = getFirestore();

const cuadrosColecctionRef = collection(db, 'cuadros');

export {storage, firebaseApp, db, cuadrosColecctionRef}