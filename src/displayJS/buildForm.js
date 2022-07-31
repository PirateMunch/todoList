import { formSubmit } from "../functionJS/formSubmit";

export default function buildForm () {

    const submitButton = newForm();
    submitButton.addEventListener('click', formSubmit)

    const projectButton = document.getElementById('addProjectButton');
    projectButton.textContent = "cancel form"
    projectButton.addEventListener('click', () => {
    const projectSection = document.getElementById('projectSection');
    projectSection.replaceChildren();
    remakeAddButton();
    })
};

function newForm() {
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
    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "dueDateInput";
    dueDateInput.className = "dueDateInput";
    dueDateDiv.appendChild(dueDateInput);

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

export function remakeAddButton () {
    const projectButton = document.getElementById('addProjectButton');
    projectButton.textContent = "add project";
    projectButton.addEventListener('click', buildForm, {once:true});
};