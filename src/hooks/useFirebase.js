import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleSignUpEmailChange = e => {
        setSignUpEmail(e.target.value);
    }
    const handleSignUpPasswordChange = e => {
        setSignUpPassword(e.target.value);
    }


    const createAccountUsingEmail = () => {
        return createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside State Change', user)
                setUser(user);
            }
            else {
                setUser(null);
            }
        })
    }, []);

    const setUserDetails = () => {
        updateProfile(auth.currentUser, { displayName: name, email: signUpEmail })
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
    }


    const logOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }


    const handleGoogleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const handleFacebookSignUp = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const handleTwitterSignUp = () => {
        return signInWithPopup(auth, twitterProvider);
    }






    return {
        user,
        setUser,
        setError,
        handleNameChange,
        handleSignUpEmailChange,
        handleSignUpPasswordChange,
        createAccountUsingEmail,
        setUserDetails,
        logOutUser,
        handleGoogleSignUp,
        handleFacebookSignUp,
        handleTwitterSignUp
    }
}

export default useFirebase;