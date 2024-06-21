import React, { createContext, useCallback, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebaseConfig';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const [loading, setLoading] = useState(true);
    const axiosPublic=useAxiosPublic();
    //console.log(user);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logout = () => {
        setLoading(true);
        setUser(null)
        signOut(auth)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            if(user){
                const userinfo = {email: user.email}
                axiosPublic.post('jwt', userinfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                })
              }
              else{
                // TODO : Remove token
                localStorage.removeItem('access-token');
                setLoading(false)
              }
            // if (user) {

            // }
        });
        return () => {
            unSubscribe();
        }
    }, [user,axiosPublic])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        user,
        updateUserProfile,
        loading,
        logout
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;