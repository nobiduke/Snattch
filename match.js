// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue, update} from "firebase/database";

// Get the respective ID's from the Database
const auth = getAuth();
const db = getDatabase();

onAuthStateChanged(auth, (user) => {
    if (user) {
        // var temp = user;
        getUserScore(user.uid);
        getUserRankScore(user.uid);
    }
    
})

export function getUserScore(uid) {
    const userID = ref(db, '/users/' + uid)
    onValue(userID, (snapshot) =>{
      console.log(snapshot.val()['score'])
      return snapshot.val()['score']
    })
}


export function updateScoreUser(uid, score){
    update['/users/' + uid + 'score'] = score;
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
