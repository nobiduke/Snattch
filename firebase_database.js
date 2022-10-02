import {getDatabase, ref, set} from "firebase/database"


export function writeUserData(uid, name, gender, age, bio){
    const db = getDatabase();
    const reference = ref(db, 'users/' + uid)

    set(reference,{
        Id: uid,
        Name: name,
        Gender: gender, 
        Age: age,
        Bio: bio,
        Score: 0});
}
