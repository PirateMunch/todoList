import { buildPrioritySlider } from "../displayJS/buildForm";
import { setPriority, buildProjectFooter } from "../displayJS/projectCardDisplay";

export default function getSetLocal (project) {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
    // Stop duplicates when updated lists
    currentStorage.forEach((element) => {
        if (element.title === project.title) {
            let index = currentStorage.indexOf(element)
            if (index > -1) {
                currentStorage.splice(index, 1)
            }; 
            return currentStorage
        };
        return currentStorage
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
            priorDiv.className = "priorDiv";
            const sliderDiv = document.createElement('div');
            sliderDiv.className = "sliderDiv";
            sliderDiv.id = "sliderDiv";
            buildPrioritySlider(sliderDiv);
            priorDiv.replaceWith(sliderDiv);
            //Button to update change
            const changeButton = document.createElement('button');
            changeButton.type = "button";
            changeButton.id = "changeButton";
            changeButton.className = "changeButton";
            changeButton.textContent = "update";
            sliderDiv.appendChild(changeButton);
            changeButton.addEventListener('click', (e) => {
            const priority = document.getElementById('priorityRange');
                console.log(priority.value)
                project.priority = priority.value;
                console.log(project.priority)
                const projectDiv = e.target.parentNode.parentNode.parentNode; 
                setPriority(project, projectDiv);
                getSetLocal(project);
               
                const hiddenDiv = e.target.parentNode.parentNode;
                const newFoot = buildProjectFooter(project, hiddenDiv)
                sliderDiv.replaceWith(newFoot)
            })
        } 
    });
localStorage.setItem('projects', JSON.stringify(currentStorage));
}

// export function sortLists () {
//     let currentStorage = JSON.parse(localStorage.getItem('projects'));
//     currentStorage.forEach((element) => {
//         if (element.title === project.title) {
//             let index = currentStorage.indexOf(element)
//             if (index > -1) {
//             console.log(index)
//             }; 
//         } 
//         console.log(element)
//     });
// localStorage.setItem('projects', JSON.stringify(currentStorage));
// }