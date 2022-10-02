import {getDatabase, ref, set} from "firebase/database"


export function writeUserData(userId, name, gender, age, bio){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId)

    set(reference,{
        username: name, 
        gender: gender, 
        age: age,
        bio: bio,
        score: 0});
}

export function ranking(userId, score){
    const db = getDatabase();
    const reference = ref(db, 'ranking/')

    set(reference,{
        UserId: userId,
        score: score});
}
