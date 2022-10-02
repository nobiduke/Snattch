import { getDatabase, ref, onValue } from "firebase/database";
// turns the database into a dictionary values

export function makeMap(uid){
    var orderedmap = {}
    const db = getDatabase()
    console.log(uid)
    const userID = ref(db, 'users')
    onValue(userID, (snapshot) =>{
      snapshot.forEach((entry)=>{
        console.log(entry.val()["score"])
        orderedmap[entry.val()[uid]] = entry.val()["score"]
        return orderedmap
      })

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
