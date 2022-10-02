// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue, update} from "firebase/database";
import { makeMap } from "./extract";

// Get the respective ID's from the Database
const db = getDatabase();

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // var temp = user;
//         getUserScore(user.uid);
//     }
    
// })

function getUserScore(uid) {
    var value = 1;
    const userID = ref(db, '/users/' + uid)
    onValue(userID, (snapshot) =>{
        value = snapshot.val()['Score'];
    });
    return value;
}

function getInfo(Id){
    var info = {}
    const userRef = ref(db, '/users/' + Id);
    onValue(userRef, (snapshot)=>{
        info = snapshot.val()
        // console.log(info)
    })
    return info
}


// export function updateScoreUser(uid, score){
//     update['/users/' + uid + '/Score'] = score;
// }

// finds the closest score to the user
export function userMatching(uid) {
    let userDict = makeMap(db);
    let userScore = userDict[uid];
    // console.log(userScore)
    var closestUser; // stores the closest scores uid to the original
    var closestVal = 0;
    let current = [];
    let count = 0;

    for(const [key, val] of Object.entries(userDict)){
        // console.log(key);
        if(key != uid){
            current.push({key:key, val:Math.abs(userScore - val)})
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

    let slice = current.slice(0, 10);
    let returnList = [];
    for(const entry of slice){
        returnList.push(getInfo(entry['key']));
    }

    return returnList;

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
