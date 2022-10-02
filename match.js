// import { FirebaseError } from "firebase/app"
// import {Database, getDatabase, ref} from "firebase/database"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue, update, set} from "firebase/database";
import {app} from './firebase';
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


export function updateScoreUser(uid, score){
    let oldScore = null;
    const userRef = ref(db, '/users/' + uid + '/Score');
    onValue(userRef, (snapshot)=>{
        oldScore = snapshot.val()
        // console.log(info)
    })
    oldScore+=score;
    set(userRef, oldScore);
}

export function updateUserPossMatches(uid, otherId){
    let oldScore = null;
    const userRef = ref(db, '/users/' + uid + '/PosMatches');
    onValue(userRef, (snapshot)=>{
        oldScore = snapshot.val()
        // console.log(info)
    })
    if(oldScore != null && oldScore != []){
        oldScore.push(`${otherId}`)
    }else{
        oldScore = [`${otherId}`];
    }
    
    set(userRef, oldScore);
}

export function updateUserMatches(uid, otherId){
    let oldScore = null;
    const userRef = ref(db, '/users/' + otherId + '/PosMatches');
    onValue(userRef, (snapshot)=>{
        oldScore = snapshot.val()
        // console.log(info)
    })

    console.log(oldScore)

    if(oldScore == null || oldScore == []){return;}

    for(const entry of oldScore){
        if(entry == uid){
            const myRef = ref(db, '/users/' + uid + '/Matches');
            const otherRef = ref(db, '/users/' + otherId + '/Matches');
            
            let toAdd1 = [`${otherId}`];
            let toAdd2 = [`${uid}`];

            onValue(myRef, (snapshot)=>{
                if(snapshot.val() == null || snapshot.val() == []){
                    toAdd1 = [`${otherId}`];
                } else{
                    toAdd1 = snapshot.val().concat([`${otherId}`]);
                }
            })
            onValue(otherRef, (snapshot)=>{
                if(snapshot.val() == null || snapshot.val() == []){
                    toAdd2 = [`${uid}`];
                } else{
                    toAdd2 = snapshot.val().concat([`${uid}`]);
                }
            })

            set(myRef, toAdd1)
            set(otherRef, toAdd2)
        }
    }
}

export function getMatches(uid){
    let value = null;
    const userRef = ref(db, '/users/' + uid + '/Matches');
    onValue(userRef, (snapshot)=>{
        if(snapshot.val()){
            value = snapshot.val();
        }
    })

    if(value == null){
        return ""
    }

    return getInfo(value[0]);
}

// finds the closest score to the user
export async function userMatching(uid) {
    
    var userDict = makeMap(db);
    // console.log(userDict)
    let user = getInfo(uid);
    let userScore = userDict[uid];
    // console.log(userScore)
    var closestUser; // stores the closest scores uid to the original
    var closestVal = 0;
    let current = [];
    let count = 0;
    for(const [key, val] of Object.entries(userDict)){
        let dontAdd = false;
        // console.log(key);
        if(key != uid){
            if(user['PosMatches'] != null && user['PosMatches'] != []){
                for(const match of user['PosMatches']){
                    if(match == key){
                        dontAdd = true;
                        break;
                    }
                }
                if(!dontAdd){(current.push({key:key, val:Math.abs(userScore - val)}))};
            } else if(user['Matches'] != null && user['Matches'] != []){
                for(const match of user['Matches']){
                    if(match == key){
                        dontAdd = true;
                    }
                }
                if(!dontAdd){(current.push({key:key, val:Math.abs(userScore - val)}))};
            }
            else{
                current.push({key:key, val:Math.abs(userScore - val)})

            }
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
    // console.log(returnList);
    return returnList;
    
    // console.log(uid);
    

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
