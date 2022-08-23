
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {initializeFirestore} from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyAy-xyIVgOFeeCy5nZd-mYKJPlNMPWSHVk",
  authDomain: "wp-clone-ec4cd.firebaseapp.com",
  projectId: "wp-clone-ec4cd",
  storageBucket: "wp-clone-ec4cd.appspot.com",
  messagingSenderId: "725721175843",
  appId: "1:725721175843:web:8a30d344d1259bc2965e96"

};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db =initializeFirestore(app,{experimentalForceLongPolling: true,});

export function signIn(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}