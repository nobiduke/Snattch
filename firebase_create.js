import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {writeUserData} from "./firebase_database";
// import {app} from './firebase';

// const auth = getAuth(app);

export function login(auth, user, pass) {
    createUserWithEmailAndPassword(auth, user, pass)
    .then((userCredential)=>{
        const user = userCredential.user;
    })
    .catch((error)=>{
        console.log(`There was an error: ${error}`)
        
    })
}
