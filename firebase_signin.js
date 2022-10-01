import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


//sign in 
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
    const errorCode = error.code
    console.log(errorCode)
    console.log(errorMessage)
})