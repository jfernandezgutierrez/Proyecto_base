
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firestore/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAc19NgPR14UB0cW9EdsFkAMruwyi0zxh4",
  authDomain: "listacompra-951dd.firebaseapp.com",
  projectId: "listacompra-951dd",
  storageBucket: "listacompra-951dd.appspot.com",
  messagingSenderId: "913799817335",
  appId: "1:913799817335:web:faccbe3a860c983610be72"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);
export {auth, db};