import { getDatabase } from "firebase/database";
// turns the database into a dictionary values

function makeMap(){
    var map = {}
    const db = getDatabase();
    const scoresRef = db.ref('rank');
    scoresRef.orderByValue().on('value', (snapshot) => {
      snapshot.forEach((data) => {
        map[data.key] = daya.val();
    });
    });
    return map;
}
