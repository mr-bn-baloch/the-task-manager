import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9rSEqR4o5wmKbtH-yiULmZm__a7vtozI",
  authDomain: "task-manager-445b5.firebaseapp.com",
  projectId: "task-manager-445b5",
  storageBucket: "task-manager-445b5.appspot.com",
  messagingSenderId: "975991144533",
  appId: "1:975991144533:web:8e7e191da4106e503fd4dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}