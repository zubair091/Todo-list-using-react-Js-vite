// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVR6EBQddFQF5pUE7dC9qsJkCU12mIfXU",
  authDomain: "hackthon-12.firebaseapp.com",
  projectId: "hackthon-12",
  storageBucket: "hackthon-12.appspot.com",
  messagingSenderId: "411657609127",
  appId: "1:411657609127:web:f43daee2dc00b0e95a2082",
  measurementId: "G-GLDWGHV6ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth , analytics , firestore}