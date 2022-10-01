import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


//sign in 
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
})