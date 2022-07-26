import saveProject, {
    deleteProject,
    changePriority,
} from '../functionJS/saveDeleteProjects';
import homeDisplay from './homeDisplay';
import {deleteSectionChildren} from './buildForm';

// Main projectCard display function
export default function projectCardDisplay(project) {
    // project cards
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('div');
    projectDiv.id = `${project.index}`;
    projectDiv.className = 'projectDiv';
    projectSection.appendChild(projectDiv);
    // project Title + start date in header
    const projectHead = document.createElement('div');
    projectHead.id = `${project.index}`;
    projectHead.className = 'projectHead';
    projectDiv.appendChild(projectHead);
    projectHead.addEventListener('click', toggleProjectDisplay);
    const projectName = document.createElement('div');
    projectName.className = 'projectName';
    projectName.textContent = `${project.title}`;
    projectHead.appendChild(projectName);
    const listStartDate = document.createElement('div');
    listStartDate.className = 'startDate';
    listStartDate.innerText = `started
    ${project.startDate}`;
    projectHead.appendChild(listStartDate);
    // Hidden Div to toggle rest of info
    const hiddenDiv = document.createElement('div');
    hiddenDiv.id = `${project.index + 90}`;
    hiddenDiv.className = 'hiddenDiv';
    projectDiv.appendChild(hiddenDiv);
    const projectTitle = document.createElement('ul');
    projectTitle.className = 'projectTitle';
    projectTitle.id = 'projectTitle';
    hiddenDiv.appendChild(projectTitle);
    const listDescription = document.createElement('div');
    listDescription.className = 'listDescription';
    listDescription.innerText = `${project.description}`;
    projectTitle.appendChild(listDescription);
    const listDueDate = document.createElement('div');
    listDueDate.id = 'listDueDate';
    listDueDate.className = 'listDueDate';
    listDueDate.innerText = `Finish by : ${project.dueDate}`;
    projectTitle.appendChild(listDueDate);
    // TODO List Section
    const todoList = document.createElement('ul');
    todoList.id = `${project.title + 23}`;
    todoList.className = 'todoList';
    todoList.textContent = 'To-Do List';
    todoList.style.fontSize = '1.5rem';
    todoList.style.fontWeight = '700';
    projectTitle.appendChild(todoList);
    showList(project);
    setPriority(project, projectDiv);
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todoDiv';
    hiddenDiv.appendChild(todoDiv);
    const listInput = document.createElement('input');
    listInput.type = 'text';
    listInput.className = 'listInput';
    listInput.id = `${project.title + 10}`;
    listInput.placeholder = 'add to list';
    todoDiv.appendChild(listInput);
    // Add to list Button
    const todoButton = document.createElement('button');
    todoButton.id = 'todoButton';
    todoButton.className = 'todoButton';
    todoButton.type = 'button';
    todoButton.dataset.index = `${project.title}`;
    todoButton.textContent = `add`;
    todoDiv.appendChild(todoButton);
    // Add Button Event Listener here
    todoButton.addEventListener('click', () => {
        addToList(project);
        listInput.value = '';
    });
    // project Footer priority/delete options
    const projectFoot = document.createElement('div');
    projectFoot.className = 'projectFoot';
    projectFoot.id = `${project.title + 5}`;
    hiddenDiv.appendChild(projectFoot);
    buildProjectFooter(project, projectFoot);
}

export function buildProjectFooter(project, projectFoot) {
    const footDiv = document.createElement('div');
    footDiv.id = `${project.title + 55}`;
    footDiv.className = 'footDiv';
    projectFoot.appendChild(footDiv);
    // Priority Button here
    const priorityButton = document.createElement('input');
    priorityButton.type = 'button';
    priorityButton.id = 'priorityButton';
    priorityButton.className = 'priorityButton';
    priorityButton.value = 'Change priority';
    footDiv.appendChild(priorityButton);
    // EventListener for Home Button
    priorityButton.addEventListener('click', () => {
        changePriority(project);
    });
    // Delete button logic and create --
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.dataset.delete = 'delete';
    deleteButton.id = `${project.index}`;
    const deleteImg = '<img src="delete1.svg">';
    deleteButton.innerHTML = deleteImg;
    footDiv.appendChild(deleteButton);
    // EventListener for delete buttons.
    deleteButton.addEventListener('click', () => {
        deleteProject(project);
        deleteSectionChildren();
        homeDisplay();
    });
}

export function setPriority(project, projectDiv) {
    const levelPriority = project.priority;
    switch (levelPriority) {
        case '1':
            projectDiv.className = 'lowP';
            break;
        case '2':
            projectDiv.className = 'midP';
            break;
        case '3':
            projectDiv.className = 'highP';
            break;
    }
}

function toggleProjectDisplay() {
    let sibling = this.nextElementSibling;
    if (sibling.className === 'hiddenDiv') {
        sibling.classList.remove('hiddenDiv');
    } else {
        sibling.className = 'hiddenDiv';
    }
}

function addToList(project) {
    const projectList = project.list;
    const thisItemInput = document.getElementById(`${project.title + 10}`);
    const thisListContainer = document.getElementById(`${project.title + 23}`);
    const newListItem = document.createElement('li');
    newListItem.id = thisItemInput.value;
    newListItem.textContent = thisItemInput.value;
    const deleteItem = document.createElement('button');
    deleteItem.type = 'button';
    deleteItem.textContent = 'X';
    deleteItem.className = 'deleteItem';
    makeListButton(deleteItem, projectList, project);
    projectList.push(newListItem.textContent);
    thisListContainer.appendChild(newListItem);
    newListItem.appendChild(deleteItem);
    saveProject(project);
}

function makeListButton(deleteItem, projectList, project) {
    deleteItem.addEventListener('click', (e) => {
        const listItem = e.target.parentNode;
        projectList.forEach((element) => {
            if (element === listItem.id) {
                const index = projectList.indexOf(element);
                if (index > -1) {
                    projectList.splice(index, 1);
                }
            }
            saveProject(project);
            deleteListView(project);
        });
    });
}

function showList(project) {
    const list = project.list;
    const thisListContainer = document.getElementById(`${project.title + 23}`);
    list.forEach((element) => {
        const newItem = document.createElement('li');
        const deleteItem = document.createElement('button');
        deleteItem.type = 'button';
        deleteItem.textContent = 'X';
        deleteItem.className = 'deleteItem';
        deleteItem.dataset.data = 'delete';
        newItem.textContent = element;
        newItem.id = element;
        thisListContainer.appendChild(newItem);
        newItem.appendChild(deleteItem);
        makeListButton(deleteItem, list, project);
    });
}

function deleteListView(project) {
    const section = document.getElementById(`${project.title + 23}`);
    let child = section.lastElementChild;
    while (child) {
        section.removeChild(child);
        child = section.lastElementChild;
    }
    showList(project);
}
