import { getDatabase, ref, onValue } from "firebase/database";
// turns the database into a dictionary values

export function makeMap(uid){
    const db = getDatabase()
    console.log(uid)
    const userID = ref(db, '/users/' + uid)
    onValue(userID, (snapshot) =>{
      console.log(snapshot)

  })

    // const q = query(scoresRef, where("score", ">", "5"));

    // scoresRef.on('value', (snapshot) => {
    //   snapshot.forEach((data) => {
    //     map[data.key] = data.val();
    // });
    // });
    // console.log(map);
    // return map;
}
