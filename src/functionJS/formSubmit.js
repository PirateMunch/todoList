import { ProjectClass } from "./projectClass";
import defaultDisplay from "../displayJS/defaultDisplay";



const userTitle = document.getElementById('title');
const userDescription = document.getElementById('description');
const userDueDate = document.getElementById('dueDate');
const userPriority = document.getElementById('priority');


function getUserData () {
    let title = userTitle.value;
    let description = userDescription.value;
    let startDate = Date();
    let dueDate = userDueDate.value;
    let priority = userPriority.value;
    const thisProject = new ProjectClass (title, description, startDate, dueDate, priority)
    //hide form on submit
    document.getElementById("hideForm").style.display = "none"
    document.getElementById("addProjectButton").innerText = "add project"
    defaultDisplay(thisProject);
    document.getElementById("form").reset();
    
};

function createProjectForm() {
    //(Add New Project) get form button
    const newForm = document.getElementById("hideForm");
    const displaySetting = newForm.style.display;
    const addButton = document.getElementById("addProjectButton");
    if(displaySetting !== 'flex') {
        newForm.style.display ='flex';
        addButton.textContent = "cancel"
        const submitButton = document.getElementById('formSubmitButton');
        submitButton.addEventListener('click', getUserData);
    };

  };

export {
    getUserData,
    createProjectForm
};