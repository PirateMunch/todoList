//Main default display function
export default function defaultDisplay (project) {
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('div');
    projectDiv.className = "projectDiv";
    projectSection.appendChild(projectDiv);

    const projectTitle = document.createElement('ul');
    projectTitle.className = "projectTitle";
    projectTitle.id = "projectTitle";
    projectTitle.innerText = `${project.title}`;
    projectDiv.appendChild(projectTitle);
    
    const listDescription = document.createElement('li');
    listDescription.className = "listDescription";
    listDescription.innerText = `Description: ${project.description}`
    projectTitle.appendChild(listDescription);

    const listStartDate = document.createElement('li');
    listStartDate.className = "listDueDate";
    listStartDate.innerText = `Created: ${project.startDate}`
    projectTitle.appendChild(listStartDate);

    const listDueDate = document.createElement('li');
    listDueDate.className = "listDueDate";
    listDueDate.innerText = `Due Date: ${project.dueDate}`
    projectTitle.appendChild(listDueDate);

    const listPriority = document.createElement('li');
    listPriority.className = "listPriority";
    listPriority.innerText = `Priority: ${project.priority}`
    projectTitle.appendChild(listPriority);

    const todoButton = document.createElement('button');
    todoButton.id = "todoButton"
    todoButton.textContent = `${project.title} To-Do List`;
    projectDiv.appendChild(todoButton);

    todoButton.addEventListener('click', () => {
        projectTitle.style.display = "none";
        toggleList()
    })
};

function toggleList () {
    const projectSection = document.getElementById('projectSection');
    const list = document.createElement('div');
    projectSection.appendChild(list);
    
    const itemInput = document.createElement('input');
    itemInput.type = "text";
    itemInput.className = "itemInput";
    itemInput.placeholder = "add list item";
    list.appendChild(itemInput);

    const newItemButton = document.createElement('button');
    newItemButton.textContent = "add new stp to list";
    list.appendChild(newItemButton);
    newItemButton.addEventListener('click', () => {
       const addItem = document.createElement('li');
       addItem.textContent = itemInput.value;
       list.appendChild(addItem);
    })

};
