import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { appAuth } from "../firebase/config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(appAuth, email, password);
    }
    function signUp(email, password, displayName) {
        return createUserWithEmailAndPassword(appAuth, email, password);
    }
    function logOut() {
        return signOut(appAuth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(appAuth, googleAuthProvider);
    }
    function githubSignIn() {
        const githubAuthProvider = new GithubAuthProvider();
        return signInWithPopup(appAuth, githubAuthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, (currentuser) => {
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn, githubSignIn, appAuth }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}