
import defaultDisplay from "./defaultDisplay";


export default function homeDisplay () {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    
    currentStorage.forEach(element => {
        defaultDisplay(element)
    });
};

