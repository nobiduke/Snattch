import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"

const auth = getAuth(app);

// create user

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("pass_field").value;

    try {
        createUserWithEmailAndPassword(auth, userEmail, userPass)
    }
    catch(error){
        console.log("There was an error: ${error}")
    }
}

