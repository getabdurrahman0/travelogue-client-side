import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const InitAuth=()=>{
    initializeApp(firebaseConfig);
}

export default InitAuth;