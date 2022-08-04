import { formSubmit } from "../functionJS/formSubmit";
import homeDisplay from "./homeDisplay";
import { addToList } from "./defaultDisplay";
import getSetLocal from "../functionJS/localStore";


export default function buildForm () {
    if (localStorage.getItem('projects') === null) {
        let cats = [];
        localStorage.setItem('projects', JSON.stringify(cats))
        console.log("makeCat")
    } else {
        console.log("duno")
    }
    const submitButton = newForm();
    submitButton.addEventListener('click', formSubmit)

    const projectButton = document.getElementById('addProjectButton');
    projectButton.textContent = "cancel form"
    projectButton.addEventListener('click', () => {
    deleteSectionChildren();
    homeDisplay();
    remakeAddButton();
    })
};

function newForm() {
    deleteSectionChildren();
    const projectSection = document.getElementById('projectSection');
    const formDiv = document.createElement('div');
    formDiv.className = "formDiv";
    projectSection.appendChild(formDiv);
    const form = document.createElement('form');
    form.name = "form";
    form.id = "form";
    form.className = "form1";
    formDiv.appendChild(form);

    const titleDiv = document.createElement('div');
    titleDiv.className = "titleDiv";
    form.appendChild(titleDiv);
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.placeholder = "Add Project Title";
    titleDiv.appendChild(titleInput);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = "descriptionDiv";
    form.appendChild(descriptionDiv);
    const descriptionInput = document.createElement('input');
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.placeholder = "Add a short description of your To-Do List project";
    descriptionDiv.appendChild(descriptionInput);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = "dueDateDiv";
    form.appendChild(dueDateDiv);
    const labelDueDate = document.createElement('label');
    labelDueDate.textContent = "Your ideal completion date :";
    dueDateDiv.appendChild(labelDueDate);
    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "dueDateInput";
    dueDateInput.className = "dueDateInput";
    dueDateDiv.appendChild(dueDateInput);

    const listContainer = document.createElement('div');
    listContainer.className = "listContainer";
    form.appendChild(listContainer);

    //List input box
    const thisIndex = new Date()
    const listInput = document.createElement('input');
    listInput.type = "text";
    listInput.className = "listInput";
    listInput.id = `${thisIndex}`
    listInput.placeholder = "Add your first To-Do list";
    listContainer.appendChild(listInput);

    //Add to list Button 
    const todoButton = document.createElement('button');
    todoButton.id = "todoButton1";
    todoButton.className = "todoButton";
    todoButton.type = "button";
    todoButton.dataset.index = `${thisIndex}`
    todoButton.textContent = `add`;
    listContainer.appendChild(todoButton);
    // Add Button Event Listener here
    todoButton.addEventListener('click', updateList)

    const priorityContainer = document.createElement('div');
    priorityContainer.className = "priorityContainer";
    priorityContainer.textContent = "Set priority level";
    form.appendChild(priorityContainer);

    const priorityDiv = document.createElement('div');
    priorityDiv.className = "priorityDiv";
    form.appendChild(priorityDiv);
    
    const priorityLabel = document.createElement('div');
    priorityLabel.className = "priorityLabel";
    priorityDiv.appendChild(priorityLabel);
    const priorityLow = document.createElement('span');
    priorityLow.className = "priorityLow";
    priorityLow.textContent = "low";
    priorityLow.style.color = "green";
    priorityDiv.appendChild(priorityLow);
    const priorityInput = document.createElement('input');
    priorityInput.type = "range";
    priorityInput.id = "priorityRange";
    priorityInput.className = "priorityRange";
    priorityInput.min = "1";
    priorityInput.max = "3";
    priorityDiv.appendChild(priorityInput);
    const priorityHigh = document.createElement('span');
    priorityHigh.className = "priorityHigh";
    priorityHigh.textContent = "high";
    priorityHigh.style.color = "red";
    priorityDiv.appendChild(priorityHigh);

    const submitButtonDiv = document.createElement('div');
    submitButtonDiv.className = "submitButtonDiv";
    form.appendChild(submitButtonDiv);
    const submitButton = document.createElement('button');
    submitButton.type = "button";
    submitButton.id = "formSubmitButton";
    submitButton.textContent = "add project";
    submitButtonDiv.appendChild(submitButton);
    return submitButton;
}

function updateList () {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
    console.log(currentStorage)
}

export function remakeAddButton () {
    const projectButton = document.getElementById('addProjectButton');
    projectButton.textContent = "add project";
    projectButton.addEventListener('click', buildForm, {once:true});
};

export function deleteSectionChildren () {
    const section = document.getElementById('projectSection');
    let child = section.lastElementChild;
    while (child) {
        section.removeChild(child);
        child = section.lastElementChild;
    }
};