import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
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
    function signUp(email, password) {
        return createUserWithEmailAndPassword(appAuth, email, password);
    }
    function logOut() {
        return signOut(appAuth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(appAuth, googleAuthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}