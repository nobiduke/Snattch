// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaa-PJEqNk5r8UTcu2IPAt6XvKKib6fcM",
  authDomain: "midyear-precept-364216.firebaseapp.com",
  projectId: "midyear-precept-364216",
  storageBucket: "midyear-precept-364216.appspot.com",
  messagingSenderId: "256022633515",
  appId: "1:256022633515:web:61ed5beb8571d38ef21e6e",
  measurementId: "G-CR0QJCZG16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// create user
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
});

//sign in 
signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
})