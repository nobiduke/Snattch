import {getDatabase, ref, set} from "firebase/database"


export function writeUserData(uid, name, gender, age, bio){
    const db = getDatabase();
    const reference = ref(db, 'users/' + uid)

    set(reference,{
        name: name,
        gender: gender, 
        age: age,
        bio: bio,
        score: 0});
}
