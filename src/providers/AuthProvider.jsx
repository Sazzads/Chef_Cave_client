import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const creteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserdata = (users, name,photo) => {
        
        return updateProfile(users, { displayName: name,photoURL:photo });
        setLoading(false);

    }


    //google registation
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }
    //github registation
    const createUserGit = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);

    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log("logged in uder user inside state observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creteUser,
        signIn,
        logOut,
        createUserGoogle,
        createUserGit,
        updateUserdata

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;