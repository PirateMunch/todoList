import { projectArray } from "../functionJS/projectArray";

//Main default display function
export default function defaultDisplay (project) {
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('div');
    projectDiv.id = "projectDiv";
    projectSection.appendChild(projectDiv);

    const projectTitle = document.createElement('ul');
    projectTitle.className = "projectTitle";
    projectTitle.id = "projectTitle";
    projectDiv.appendChild(projectTitle);

    const projectHead = document.createElement('div');
    projectHead.className = "projectHead";
    projectTitle.appendChild(projectHead);

    const projectName = document.createElement('div');
    projectName.className = "projectName";
    projectName.textContent = `${project.title}`
    projectHead.appendChild(projectName);
    
    const listDescription = document.createElement('div');
    listDescription.className = "listDescription";
    listDescription.innerText = `${project.description}`
    projectTitle.appendChild(listDescription);

    const listStartDate = document.createElement('div');
    listStartDate.className = "startDate";
    listStartDate.innerText = `started
    ${project.startDate}`;
    projectHead.appendChild(listStartDate);

    const listDueDate = document.createElement('div');
    listDueDate.id = "listDueDate";
    listDueDate.className = "listDueDate";
    listDueDate.innerText = `Finish by : ${project.dueDate}`
    projectTitle.appendChild(listDueDate);

    const levelPriority = project.priority
    switch (levelPriority) {
        case '1':
            projectDiv.className = "lowP";
            break;
        case '2':
            projectDiv.className = "midP";
            break;
        case '3':
            projectDiv.className = "highP";
            break;
    };

    const todoList = document.createElement('ul');
    todoList.id = `${project.title}`;
    todoList.className = "todoList"
    todoList.textContent = "To-Do List"
    todoList.style.fontSize = "1.5rem"
    todoList.style.fontWeight = "700"
    projectTitle.appendChild(todoList);

    const todoDiv = document.createElement('div')
    todoDiv.className = "todoDiv";
    projectDiv.appendChild(todoDiv);

    //List input box
    const listInput = document.createElement('input');
    listInput.type = "text";
    listInput.className = "listInput";
    listInput.id = `${project.title+10}`
    listInput.placeholder = "add to list"
    todoDiv.appendChild(listInput);

    //Add to list Button 
    const todoButton = document.createElement('button');
    todoButton.id = "todoButton";
    todoButton.className = "todoButton";
    todoButton.dataset.index = `${project.title}`
    todoButton.textContent = `add`;
    todoDiv.appendChild(todoButton);
    //Add Button Event Listener here
    todoButton.addEventListener('click', () => {
        addToList(project)
        listInput.value = "";
    })

    const projectFoot = document.createElement('div');
    projectFoot.className = "projectFoot"
    projectDiv.appendChild(projectFoot);

    //Home Button here
    const returnListButton = document.createElement('input');
    returnListButton.type = "button";
    returnListButton.className = "returnList";
    returnListButton.value = "Home";
    projectFoot.appendChild(returnListButton);
    //EventListener for Home Button
    returnListButton.addEventListener('click', () => {
        console.log(projectArray)
    });

    //Delete button logic and create --
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.dataset.delete = "delete";
    deleteButton.id = `${project.index}`
    const deleteImg = '<img src="delete1.svg">';
    deleteButton.innerHTML = deleteImg;
    projectFoot.appendChild(deleteButton);
    //EventListener for delete buttons.
    const deleteButtons = document.querySelectorAll('button[data-delete]');
        for(const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', deleteBook)
        };
};

function addToList (project) {
    const thisItem = document.getElementById(`${project.title+10}`);
    const thisList = document.getElementById(`${project.title}`);
    const newItem = document.createElement('li');
    newItem.textContent = thisItem.value;
    thisList.appendChild(newItem);
    console.log(thisItem.value);
};
 