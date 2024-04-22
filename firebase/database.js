import { app, db } from "./init";
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "tasks"));
let data = []
querySnapshot.forEach((doc) => {
  data.push({ ...doc.data(), id: doc.id})
});

console.log(data)

export {
  data
}