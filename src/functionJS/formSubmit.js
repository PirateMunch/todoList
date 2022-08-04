import { ProjectClass } from "./projectClass";
import { remakeAddButton } from "../displayJS/buildForm";
import homeDisplay from "../displayJS/homeDisplay";
import getSetLocal from "./localStore";

function formSubmit () {
    const projectButton = document.getElementById('addProjectButton');
    const section = document.getElementById('projectSection');
    const userTitle = document.getElementById('title');
    const userDescription = document.getElementById('description');
    const userDueDate = document.getElementById('dueDateInput');
    const userPriority = document.getElementById('priorityRange');
    const userList = document.getElementById('listInput1');
    let uniqueID = uniqueIndex(); 
    let title = userTitle.value;
    let description = userDescription.value;
    let startDate = formatDate(new Date());
    let dueDate = userDueDate.value;
    let priority = userPriority.value;
    let index = uniqueID;
    let list = [];
    if (userList.value !== "") {
        list.push(userList.value);
    }
    const thisProject = new ProjectClass (title, description, startDate, dueDate, priority, index, list);
    projectButton.textContent = "add project";
    getSetLocal(thisProject); 
    section.replaceChildren();
    homeDisplay();
    remakeAddButton();
};

//random number for my uniqueID
function uniqueIndex() {
    return Math.floor(Math.random()*Date.now())
  }

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

export {formSubmit};