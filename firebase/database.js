import { app, db } from "./init";
import { collection, getDocs } from "firebase/firestore";

let data = []
let i = 0
const querySnapshot = await getDocs(collection(db, "tasks"));
querySnapshot.forEach((doc) => {
  data[i] = doc.data()
  console.log(data[i])
  i++
});

export {
  data
}