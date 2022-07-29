import { projectClass } from "./projectClass";
import defaultDisplay from "../displayJS/defaultDisplay";
import switchDisplay from "./getProjectForm";



const userTitle = document.getElementById('formSpan');
const userDescription = document.getElementById('addDescription');
const userDueDate = document.getElementById('addDueDate');
const userPriority = document.getElementById('addPriority');


function getUserData () {
    let title = userTitle.innerText;
    let description = userDescription.value
    let startDate = Date();
    let dueDate = userDueDate.value
    let priority = userPriority.value
    const thisProject = new projectClass (title, description, startDate, dueDate, priority)
    defaultDisplay(thisProject);
    clearForm()
};

function clearForm () {
    document.getElementById('addProject').value = "";
    userDescription.value = "";
    userDueDate.value = "";
    userPriority.value = "";
    document.getElementById('formTitle').style.display = "flex";
    document.getElementById('projectForm').style.display = "none";
    
};

export {
    getUserData,
};