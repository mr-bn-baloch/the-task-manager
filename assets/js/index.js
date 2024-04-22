const tasksRow = document.querySelector("#tasksRow")
const addTaskContainer = document.querySelector("#addTaskContainer")
const addnewTask = document.querySelector("#addTask")
const newTaskTitle = document.querySelector("#newTaskTitle")
const newTaskDescription = document.querySelector("#newTaskDescription")

const currentDashboard = document.querySelector("#currentDashboard")
const parentDashboard = document.querySelector("#parentDashboard")
const dashboardName = document.querySelector("#dashboardName")

const dashboardModal = new bootstrap.Modal(document.querySelector("#login-modal"), {})
const taskDetailsModal = new bootstrap.Modal(document.querySelector("#standard-modal-view"), {})
const addTaskModal = new bootstrap.Modal(document.querySelector("#standard-addtask-modal"), {})
const editTaskModal = new bootstrap.Modal(document.querySelector("#standard-edittask-modal"), {})

const card = document.querySelector(".card-body");

addTaskContainer.addEventListener("click", function() {
    newTaskTitle.value = ""
    newTaskDescription.value = ""
});

function addNewTask() {

    if (newTaskTitle.value != "") {
        let newTask;
        newTask = document.createElement("div")
        newTask.className = "col-lg-3"

        newTask.innerHTML = `
        <div class="card widget-flat">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 ms-auto">
                        <svg onclick="viewTaskDetails('${newTaskTitle.value}', '${newTaskDescription.value}', 'false')" data-bs-toggle="modal"
                            data-bs-target="#standard-modal-view" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-eye">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>

                        <svg onclick="editTask('${newTaskTitle.value}', '${newTaskDescription.value}')" data-bs-toggle="modal"
                            data-bs-target="#standard-edittask-modal" xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-pencil">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>

                        <svg onclick="deleteTask()" width="20" height="20" viewBox="0 0 15 15"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <h3 class="mt-2 mb-2"> ${newTaskTitle.value} </h3>
                <h4 class="mb-0 text-muted"> ${newTaskDescription.value} </h4>
            </div>
        </div>`

        addTaskContainer.before(newTask)
        addTaskModal.hide()
    }
}

function createNewDashboard() {

    if (dashboardName.value != "") {
        let newDashboard = document.createElement("li")
        newDashboard.className = "side-nav-item"
        newDashboard.innerHTML = `<a href="#sidebarDashboards" 
        aria-controls="sidebarDashboards" class="side-nav-link">
        <i class="uil-home-alt"></i>
        <span> ${dashboardName.value} </span>
    </a>`
        parentDashboard.insertBefore(newDashboard, currentDashboard)
        dashboardModal.hide()
    }
}

const modalTitle = document.querySelector(".modal-title")
const modalDescription = document.querySelector(".modal-description")
const taskStatus = document.querySelector(".status")

function viewTaskDetails(title, description, status) {
    modalTitle.innerText = title
    modalDescription.innerText = description
    taskStatus.innerText = `Status: ${status}`
}
const editTitle = document.querySelector("#edit-title")
const editDescription = document.querySelector("#edit-description")
function editTask(title, description, status) {
    editTitle.value = title
    editDescription.innerText = description
}

function greet() {
    console.log("Hi")
}