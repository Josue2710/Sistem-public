import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7RD9HA4_llNM4YoeakaNhtQWfa6839UA",
  authDomain: "muro-interactivo-f647c.firebaseapp.com",
  projectId: "muro-interactivo-f647c",
  storageBucket: "muro-interactivo-f647c.appspot.com",
  appId: "1:761675457579:web:52c7791e56ac01585a366e"
  };

const app = initializeApp(firebaseConfig)
export const auth= getAuth(app);
export const db = getFirestore(app)