import { buildPrioritySlider } from "../displayJS/buildForm";
import { setPriority, buildProjectFooter } from "../displayJS/projectCardDisplay";

export default function saveProject (project) {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
    // Stop duplicates when updated lists
    currentStorage.forEach((element) => {
        if (element.title === project.title) {
            let index = currentStorage.indexOf(element)
            if (index > -1) {
                currentStorage.splice(index, 1)
            }; 
        };
    })
    currentStorage.push(project);
    localStorage.setItem('projects', JSON.stringify(currentStorage));
};

export function deleteProject (project) {
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

export function changePriority (project) {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
    currentStorage.forEach((element) => {
        if (element.title === project.title) {
            //make slider and replace buttons
            let priorDiv = document.getElementById(`${project.title +5}`);
            let footDiv = document.getElementById(`${project.title+55}`);
            const sliderDiv = document.createElement('div');
            sliderDiv.className = "sliderDiv";
            sliderDiv.id = "sliderDiv";
            buildPrioritySlider(sliderDiv);
            //Button to update change
            const changeButton = document.createElement('button');
            changeButton.type = "button";
            changeButton.id = "changeButton";
            changeButton.className = "changeButton";
            changeButton.textContent = "update";
            sliderDiv.appendChild(changeButton);
            //remove current footer
            priorDiv.removeChild(footDiv);
            priorDiv.appendChild(sliderDiv);

            changeButton.addEventListener('click', (e) => {
            const priority = document.getElementById('priorityRange');
                project.priority = priority.value;
                const projectDiv = e.target.parentNode.parentNode.parentNode.parentNode; 
                setPriority(project, projectDiv);
                saveProject(project);
                // restore new footer
                resetCardFooter(priorDiv, project)
            })
        } 
    });
localStorage.setItem('projects', JSON.stringify(currentStorage));
};

function resetCardFooter (priorDiv, project) {
    priorDiv.removeChild(sliderDiv);
    buildProjectFooter(project, priorDiv)
};