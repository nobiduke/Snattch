import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"

const auth = getAuth(app);


// create user
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message

    if (errorCode == 'email-already-in-use'){
        print("The account already exists.");
    }

});

