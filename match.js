// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebase = getAuth();

onAuthStateChanged(user => {
    if (user) {
        getUserScore(user.uid)
        getUserRankScore(user.uid)
    }
    
})


export function getUserScore(uid) {
    firebase.database().ref('users/' + uid).once("score", snap => {
        console.log(snap.val())
        return snap.val()
    })
}

export function getUserRankScore(uid) {
    firebase.database().ref('ranking/' + uid).once("score", snap => {
        console.log(snap.val())
        return snap.val()
    })
}

export function updateScoreUser(uid, score){
    var query = db.ref("user").orderByChild("uid").equalTo(uid);
    query.once("child_added", function(snapshot){
    snapshot.ref.update({score: score})
    });

}


export function updateScoreRank(uid, score){
    var query = db.ref("Rrank").orderByChild("uid").equalTo(uid);
    query.once("child_added", function(snapshot){
    snapshot.ref.update({score: score})
    });

}
