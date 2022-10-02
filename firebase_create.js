import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {writeUserData} from "./firebase_database";
// import {app} from './firebase';

// const auth = getAuth(app);

export function login(auth, user, pass, trigger) {
    let err = 0;
    createUserWithEmailAndPassword(auth, user, pass)
    .then(() => {
    // Signed in 
        trigger(2);
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
