import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const auth = getAuth();


    const createAccountUsingEmail = () => {
        return createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });
    }







    return {
        createAccountUsingEmail
    }
}

export default useFirebase;