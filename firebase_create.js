import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"

const auth = getAuth(app);

// create user

async function login(user, pass) {

    try {
        createUserWithEmailAndPassword(auth, user, pass)
    }
    catch(error){
        console.log("There was an error: ${error}")
    }
}

