import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {writeUserData} from "firebase_database";

export function login(auth, user, pass) {
    createUserWithEmailAndPassword(auth, user, pass)
        .then((userCredential)=>{
            const user = userCredential.user;
        })
        .catch((e)=>{
            console.log(`There was an error: ${error}`)

    })
}

writeUserData("Josh", "Josh", "Male", 0);
