import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
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
            setIsLoading(false);
        })
    }, []);

    const setUserDetails = () => {
        updateProfile(auth.currentUser, { displayName: name, email: signUpEmail })
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const logOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .finally(() => setIsLoading(false));
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

    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    }

    const handleLoginEmailChange = e => {
        setLoginEmail(e.target.value);
    }
    const handleLoginPasswordChange = e => {
        setLoginPassword(e.target.value);
    }




    return {
        user,
        name,
        setUser,
        error,
        setError,
        handleNameChange,
        handleSignUpEmailChange,
        handleSignUpPasswordChange,
        createAccountUsingEmail,
        setUserDetails,
        logOutUser,
        handleGoogleSignUp,
        handleFacebookSignUp,
        handleTwitterSignUp,
        handleLogin,
        handleLoginEmailChange,
        handleLoginPasswordChange,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;