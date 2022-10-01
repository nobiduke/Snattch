import {initalizeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database"
import {app} from './firebase';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user){
//         const uid = user.uid
//     }

//   });

export function writeUserData(userId, name, gender, score){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId)

    set(reference,{
        username: name, 
        gender: gender, 
        score: score});
}
