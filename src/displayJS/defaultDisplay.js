import getSetLocal from "../functionJS/localStore";
import homeDisplay from "./homeDisplay";
import { deleteSectionChildren } from "./buildForm";

//Main default display function
export default function defaultDisplay (project) {
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('div');
    projectDiv.id = `${project.index}`;
    projectDiv.className = "projectDiv";
    projectSection.appendChild(projectDiv);

    const projectHead = document.createElement('div');
    projectHead.id = `${project.index}`;
    projectHead.className = "projectHead";
    projectDiv.appendChild(projectHead);
    projectHead.addEventListener('click', toggleProjectDisplay);

    const projectName = document.createElement('div');
    projectName.className = "projectName";
    projectName.textContent = `${project.title}`
    projectHead.appendChild(projectName);

    const listStartDate = document.createElement('div');
    listStartDate.className = "startDate";
    listStartDate.innerText = `started
    ${project.startDate}`;
    projectHead.appendChild(listStartDate);

    const hiddenDiv = document.createElement('div');
    hiddenDiv.id = `${project.index}`;
    hiddenDiv.className = "hiddenDiv";
    projectDiv.appendChild(hiddenDiv);

    const projectTitle = document.createElement('ul');
    projectTitle.className = "projectTitle";
    projectTitle.id = "projectTitle";
    hiddenDiv.appendChild(projectTitle);

    const listDescription = document.createElement('div');
    listDescription.className = "listDescription";
    listDescription.innerText = `${project.description}`
    projectTitle.appendChild(listDescription);

    const listDueDate = document.createElement('div');
    listDueDate.id = "listDueDate";
    listDueDate.className = "listDueDate";
    listDueDate.innerText = `Finish by : ${project.dueDate}`
    projectTitle.appendChild(listDueDate);

    const todoList = document.createElement('ul');
    todoList.id = `${project.title}`;
    todoList.className = "todoList"
    todoList.textContent = "To-Do List"
    todoList.style.fontSize = "1.5rem"
    todoList.style.fontWeight = "700"
    projectTitle.appendChild(todoList);   

    showList(project)

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

    const todoDiv = document.createElement('div')
    todoDiv.className = "todoDiv";
    hiddenDiv.appendChild(todoDiv);

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
    todoButton.type = "button";
    todoButton.dataset.index = `${project.title}`
    todoButton.textContent = `add`;
    todoDiv.appendChild(todoButton);
    // Add Button Event Listener here
    todoButton.addEventListener('click', () => {
        addToList(project)
        listInput.value = "";
    });

    const projectFoot = document.createElement('div');
    projectFoot.className = "projectFoot"
    hiddenDiv.appendChild(projectFoot);

    //Home Button here
    const returnListButton = document.createElement('input');
    returnListButton.type = "button";
    returnListButton.className = "returnList";
    returnListButton.value = "Home";
    projectFoot.appendChild(returnListButton);
    //EventListener for Home Button
    returnListButton.addEventListener('click', () => {
        //not needed now so test here
        // updateList(project);
        
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
    deleteButton.addEventListener('click', () => {
        deleteProject(project)
        deleteSectionChildren()
        homeDisplay()
    });
};

function toggleProjectDisplay () {
    let sibling = this.nextElementSibling
    if (sibling.className === "hiddenDiv") {
        sibling.classList.remove("hiddenDiv");
        } else {
            sibling.className = "hiddenDiv"
        };
    };

export function addToList (project) {
    const thisItem = document.getElementById(`${project.title+10}`);
    const thisList = document.getElementById(`${project.title}`);
    const newItem = document.createElement('li');
    let projectList = project.list;
    newItem.textContent = thisItem.value;
    thisList.appendChild(newItem);
    projectList.push(newItem.textContent);
    getSetLocal(project)
};

function deleteProject (project) {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
        currentStorage.forEach((element) => {
            if (element.title === project.title) {
                let index = currentStorage.indexOf(element)
                if (index > -1) {
                    currentStorage.splice(index, 1)
                }; 
            } 
        });
    localStorage.setItem('projects', JSON.stringify(currentStorage));
};

export function showList (project) {
    const list = project.list;
    const thisList = document.getElementById(`${project.title}`);
        list.forEach(element => {
            let newItem = document.createElement('li');     
            console.log(element);
            newItem.textContent = element;
            thisList.appendChild(newItem);
         });
};


 
// function deleteBook () {
//     localStorage.clear();
// };