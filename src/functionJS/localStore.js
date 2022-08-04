export default function getSetLocal (thisProject) {
    let currentStorage = JSON.parse(localStorage.getItem('projects'));
    // Stop duplicates when updated lists
    currentStorage.forEach((element) => {
        if (element.title === thisProject.title) {
            let index = currentStorage.indexOf(element)
            if (index > -1) {
                currentStorage.splice(index, 1)
            }; 
        };
    })
    currentStorage.push(thisProject);
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
