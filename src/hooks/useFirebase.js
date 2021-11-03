import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import InitAuth from "../Pages/Login/Firebase/firebase.init";

InitAuth();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    

    // Universel Auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

// Google Button
const handleGoogleSIgnIn=()=>{
    return signInWithPopup(auth, googleProvider);
  };

    
    // Observer use state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
        return ()=> unsubscribed;
    },[])

    // LogOut
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            
          })
          .finally(()=>setIsLoading(false));
    }

    
    

    return {
        logOut,
        user,
        isLoading,
        handleGoogleSIgnIn
        }
}
export default useFirebase;