import projectCardDisplay from "./projectCardDisplay";

export default function homeDisplay () {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    currentStorage.forEach(element => {
        projectCardDisplay(element)
    });
};

