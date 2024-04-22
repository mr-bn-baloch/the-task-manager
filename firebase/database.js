import { app, db } from "./init";
import { collection, getDocs } from "firebase/firestore";

let data = []
const querySnapshot = await getDocs(collection(db, "tasks"));
querySnapshot.forEach((doc) => {
  data.push({ ...doc.data(), id: doc.id})
});

export {
  data
}