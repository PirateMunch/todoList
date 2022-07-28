//Main default display function
export default function defaultDisplay (project) {
    const projectSection = document.getElementById('projectSection');
    const projectDiv = document.createElement('ul');
    projectDiv.className = "projectDiv";
    projectSection.appendChild(projectDiv);

    const projectTitle = document.createElement('li');
    projectTitle.className = "projectTitle";
    projectTitle.innerText = `>>> ${project.title}+dateed`;
    projectDiv.appendChild(projectTitle);
    
    const listDescription = document.createElement('li');
    listDescription.className = "listDescription";
    listDescription.innerText = `Description: ${project.description}`
    projectDiv.appendChild(listDescription);

    const listStartDate = document.createElement('li');
    listStartDate.className = "listDueDate";
    listStartDate.innerText = `Created: ${project.startDate}`
    projectDiv.appendChild(listStartDate);

    const listDueDate = document.createElement('li');
    listDueDate.className = "listDueDate";
    listDueDate.innerText = `Due Date: ${project.dueDate}`
    projectDiv.appendChild(listDueDate);

    const listPriority = document.createElement('li');
    listPriority.className = "listPriority";
    listPriority.innerText = `Priority: ${project.priority}`
    projectDiv.appendChild(listPriority);
};

// element attribute builder

// const buildDiv = document.createElement('div')
// Object.assign(buildDiv, {
//     id: "thisID",
//     href: "https//thisurl",
//     rel: "thisDivRel",

// });
