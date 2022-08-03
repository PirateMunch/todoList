import { ProjectClass } from "./projectClass";
import defaultDisplay from "../displayJS/defaultDisplay";
import { remakeAddButton } from "../displayJS/buildForm";
import { projectArray } from "./projectArray";
import homeDisplay from "../displayJS/homeDisplay";


function formSubmit () {
    const projectButton = document.getElementById('addProjectButton');
    const section = document.getElementById('projectSection');
    const userTitle = document.getElementById('title');
    const userDescription = document.getElementById('description');
    const userDueDate = document.getElementById('dueDateInput');
    const userPriority = document.getElementById('priorityRange');
    let title = userTitle.value;
    let description = userDescription.value;
    let startDate = formatDate(new Date());
    let dueDate = userDueDate.value;
    let priority = userPriority.value;
    let index = `${new Date() + title}`
    let list = [];
    const thisProject = new ProjectClass (title, description, startDate, dueDate, priority, index, list);

    projectArray.push(thisProject);
    projectButton.textContent = "add project";
    getSetLocal(thisProject); 
    section.replaceChildren();
    homeDisplay();
    remakeAddButton();
    return projectArray;
};

function padDigit(num) {
    return num.toString().padStart(2, '0');
}

function formatDate (date) {
    return [
        padDigit(date.getDate()),
        padDigit(date.getMonth() +1),
        date.getFullYear(),
    ].join('-')
};

function getSetLocal (thisProject) {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    console.log(currentStorage)
    currentStorage.push(thisProject);
    
    localStorage.setItem('projects', JSON.stringify(currentStorage));
    console.log(currentStorage)
};

export {
    formSubmit,

};