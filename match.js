// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue, update} from "firebase/database";
import { makeMap } from "./extract";

// Get the respective ID's from the Database
const auth = getAuth();
const db = getDatabase();

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // var temp = user;
//         getUserScore(user.uid);
//     }
    
// })

export function getUserScore(uid) {
    const userID = ref(db, '/users/' + uid)
    onValue(userID, (snapshot) =>{
      return snapshot.val()['score']
    })
}


export function updateScoreUser(uid, score){
    update['/users/' + uid + 'score'] = score;
}

// finds the closest score to the user
export function userMatching(uid) {
    let userDict = makeMap(uid);
    var userScore = getUserScore(uid);
    var closestUser; // stores the closest scores uid to the original
    var closestVal = 0;
    let current = [];
    let count = 0;

    for(key of userDict){
        if(key != uid){
            current.push({key:key, val:Math.abs(userScore - userDict[key])})
        }
    }

    current.sort((a, b)=>{
        if(a.val < b.val){
            return -1;
        } else if( a.val > b.val){
            return 1;
        } else{
            return 0;
        }
    })

    console.log(current);

    // iterates through the map until
    // userScore.sort((a, b)=>{
    //     if ( a.score < b. ){
    //       return -1;
    //     }
    //     if ( a.last_nom > b.last_nom ){
    //         return 1;
    //     }
    //     return 0;
    //     }
    // })
}
