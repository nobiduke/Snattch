// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebase = getAuth();

onAuthStateChanged(user => {
    if (user) {
        getUserData1(user.uid)
        getUserData2(user.uid)
    }
})


function getUserData1(uid) {
    firebase.database().ref('users/' + uid).once("score", snap => {
        console.log(snap.val())
        return snap.val()
    })
}

function getUserData2(uid) {
    firebase.database().ref('ranking/' + uid).once("score", snap => {
        console.log(snap.val())
        return snap.val()
    })
}

function setUserID(uid){

}

