import { getAuth, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import {app} from './firebase';
import { writeUserData } from "./firebase_database";

// const auth = getAuth(app);

export function signOn(auth, email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        return true;
    })
    .catch((error) => {
        console.log('error');
        return false;
    });
}