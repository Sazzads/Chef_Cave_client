import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
const [done,setDone]=useState('')

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const creteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => {
            console.log("Profile updated successfully.");
            setDone("REGISTER COMPLETE SUCCESSFULLY");
        }).catch((error) => {
            console.log("Error updating profile: ", error);
        });
        logOut()
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
        // setLoading(true)
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
        done,
        creteUser,
        signIn,
        logOut,
        createUserGoogle,
        createUserGit,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;