import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {writeUserData} from "./firebase_database";
// import {app} from './firebase';

// const auth = getAuth(app);

export function login(auth, user, pass) {
    let err = 0;
    createUserWithEmailAndPassword(auth, user, pass)
    .then(() => {
    // Signed in 
        return true;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return false;
    // ..
    });
}
