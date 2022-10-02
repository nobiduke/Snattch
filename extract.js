import { getDatabase, ref, onValue } from "firebase/database";
// turns the database into a dictionary values

export function makeMap(db){
    var orderedmap = {}
    const userID = ref(db, 'users')
    onValue(userID, (snapshot) =>{
      // console.log(snapshot.val());

      snapshot.forEach((entry)=>{
        orderedmap[entry.val()['Id']] = entry.val()["Score"]
        // console.log(orderedmap[entry.val()['Id']])
      })
      // return orderedmap;
    })
    return orderedmap;
    
  }

    // const q = query(scoresRef, where("score", ">", "5"));

    // scoresRef.on('value', (snapshot) => {
    //   snapshot.forEach((data) => {
    //     map[data.key] = data.val();
    // });
    // });
    // console.log(map);
    // return map;
