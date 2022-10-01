import {initalizeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database"
// import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBaa-PJEqNk5r8UTcu2IPAt6XvKKib6fcM",
    authDomain: "midyear-precept-364216.firebaseapp.com",
    projectId: "midyear-precept-364216",
    storageBucket: "midyear-precept-364216.appspot.com",
    messagingSenderId: "256022633515",
    appId: "1:256022633515:web:61ed5beb8571d38ef21e6e",
    measurementId: "G-CR0QJCZG16"
  };
  const app = initalizeApp(firebaseConfig);

//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user){
//         const uid = user.uid
//     }

//   });

export function writeUserData(userId, name, gender, score){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userID)

    set(reference,{
        username: name, 
        gender: gender, 
        score: score});
  }
