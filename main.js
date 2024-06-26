import { doc, deleteDoc, collection, addDoc, setDoc } from "firebase/firestore"
import "./firebase/database.js"
import { data, db } from "./firebase/database.js"


data.forEach((task) => {
    renderTasks(task.title, task.id, task.description, task.status, task.subtasks)
})

function renderTasks(title, id, description, status) {

    if (title != "") {
        let newTask
        newTask = document.createElement("div")
        newTask.className = "col-lg-3"
        newTask.id = id

        newTask.innerHTML = `
        <div class="card widget-flat">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 ms-auto">
                        <svg onclick="viewTaskDetails(' ${title} ',' ${description} ',' ${status} ')" data-bs-toggle="modal"
                            data-bs-target="#standard-modal-view" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-eye">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>

                        <svg onclick="editTask(' ${title} ',' ${description} ',' ${id} ')" data-bs-toggle="modal"
                            data-bs-target="#standard-edittask-modal" xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-pencil">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>

                        <svg id='${id}' class="delete-task" " width="20" height="20" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <h3 class="mt-2 mb-2"> ${title} </h3>
                <h4 class="mb-0 text-muted"> ${description} </h4>
                <h4 class="mb-0 text-muted"> The status of Task is: ${status} </h4>
            </div>
        </div>`

        addTaskContainer.before(newTask)
    }
}

// add task
let arr = []
newTaskTitle.addEventListener("click", function () {
    const allTasks = document.querySelectorAll(".col-lg-3")
    for (let task of allTasks) {
        arr.push(task.id)
    }
    for (let id of arr) {
        if (id == "none") {
            const a = document.getElementById("none")
            a.id = ""
            const docRef = collection(db, "tasks")
            addDoc(docRef, {
                title: a.getAttribute("data-title"),
                description: a.getAttribute("data-description"),
                status: "false"
            })
        }
    }
})

window.onbeforeunload = function () {
    const allTasks = document.querySelectorAll(".col-lg-3")
    for (let task of allTasks) {
        arr.push(task.id)
    }
    for (let id of arr) {
        if (id == "none") {
            const a = document.getElementById("none")
            a.id = ""
            const docRef = collection(db, "tasks")
            addDoc(docRef, {
                title: a.getAttribute("data-title"),
                description: a.getAttribute("data-description"),
                status: "false"
            })
        }
    }
};

// edit task details start

const saveChanges = document.querySelector("#saveChanges")

saveChanges.addEventListener("click", function () {
    data.forEach((task) => {
        if (task.id == editId.trim()) {
            const docRef = doc(db, "tasks", task.id)
            console.log(docRef)
            console.log(editTitle.value)
            setDoc(docRef, {
                title: editTitle.value,
                description: editDescription.value,
                status: "false"
            })
        }
    })
    editTaskModal.hide()
})

// edit task details end

// delete task start
const Tasks = document.querySelectorAll(".delete-task")
Tasks.forEach(task => {
    task.addEventListener('click', handleClick);
});

function handleClick(event) {
    data.forEach((task) => {
        if (task.id == event.target.id) {
            deleteDoc(doc(db, "tasks", event.target.id))
                .then(() => {
                    location.reload()
                })
        }
    })
}

// delete task end

// let subtasks = {
//     subtask1: [
//         "subtask title 1", "false"
//     ],
//     subtask2: [
//         "subtask title 2", "true"
//     ]
// };

// for(let a in subtasks) {
//     for(let i = 0; i < subtasks[a].length; i++) {
//         console.log(subtasks[a][i])
//     }
// }
