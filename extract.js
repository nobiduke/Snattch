import { getDatabase, ref, onValue } from "firebase/database";
// turns the database into a dictionary values

export function makeMap(){
    var map = {}
    const db = getDatabase();
    const scoresRef = ref(db, 'users');
    console.log(scoresRef);
    
    onValue(scoresRef, (snapshot)=>{
      snapshot.forEach((elem)=>{
        console.log(elem.val())
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
