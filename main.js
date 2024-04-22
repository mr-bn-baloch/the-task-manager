import * as indexElements from "./assets/js/index.js"
import "./firebase/database.js"
import { data } from "./firebase/database.js"

data.forEach((task) => {
    indexElements.renderTasks(task.title, task.id, task.description, task.status)
    indexElements.viewTaskDetails(task.title, task.description, task.status)
})