export default function getSetLocal (thisProject) {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    console.log(currentStorage)
    currentStorage.push(thisProject);
    
    localStorage.setItem('projects', JSON.stringify(currentStorage));
    console.log(currentStorage)
};