// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";
<<<<<<< Updated upstream
import {getDatabase, ref, onValue} from "firebase/database";

// Get the respective ID's from the Database
const auth = getAuth();
const db = getDatabase();
=======
import {makeMap} from extract.js;

const firebase = getAuth();
>>>>>>> Stashed changes

onAuthStateChanged(auth, (user) => {
    if (user) {
        // var temp = user;
        const userId = auth.currentUser.
        getUserScore(user.uid);
        getUserRankScore(user.uid);
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

// finds the closest score to the user
function userMatching(uid) {
    userDict = makeMap();
    var userScore = getUserScore(uid);
    var closestUser; // stores the closest scores uid to the original
    var closestVal = 0;
    let end = true;
    let z = 0;

    // iterates through the map until
    for ([key,val] of Object.entries(userDict)){
        if (key != uid){
            if (Math.abs(userScore - val) <= Math.abs(userScore - closestVal)){
                closestUser = key;
                closestVal = val;
            }
        }        
    }
}
