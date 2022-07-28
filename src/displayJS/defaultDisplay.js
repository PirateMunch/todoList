//Main default display function
export default function defaultDisplay (project) {
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('div');
    projectDiv.className = "projectDiv";
    projectSection.appendChild(projectDiv);

    const projectTitle = document.createElement('ul');
    projectTitle.className = "projectTitle";
    projectTitle.innerText = "Hmmmmmmmmmm";
    projectDiv.appendChild(projectTitle);
    
    const listTitle = document.createElement('li');
    listTitle.className = "listTitle";
    listTitle.innerText = `${project.title}`
    projectTitle.appendChild(listTitle);

    const listDescription = document.createElement('li');
    listDescription.className = "listTitle";
    listDescription.innerText = `${project.description}`
    projectTitle.appendChild(listDescription);

    const listDueDate = document.createElement('li');
    listDueDate.className = "listTitle";
    listDueDate.innerText = `${project.dueDate}`
    projectTitle.appendChild(listDueDate);

    const listPriority = document.createElement('li');
    listPriority.className = "listTitle";
    listPriority.innerText = `${project.priority}`
    projectTitle.appendChild(listPriority);
};

