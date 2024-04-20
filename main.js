import * as indexElements from "./assets/js/index.js"

import "./firebase/database.js"
import { data } from "./firebase/database.js"

data.forEach((task) => {
    indexElements.newTaskTitle.value = task.title
    indexElements.newTaskDescription.value = task.description
    indexElements.renderTasks()
})
