export default function getSetLocal (thisProject) {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    console.log(currentStorage)
    currentStorage.push(thisProject);
    
    localStorage.setItem('projects', JSON.stringify(currentStorage));
    console.log(currentStorage)
};

export function showList (project) {
    let thisStorage = localStorage.getItem('projects');
    let currentStorage = JSON.parse(thisStorage);
    let project = this.project
    const list = project.list;
    const thisList = document.getElementById(`${project.title}`);
    let newItem = document.createElement('li');
    if (list.lentgh !== 0) {
        list.forEach(element => {
            newItem.textContent = element;
            thisList.appendChild(newItem);
            list.push(newItem);
         });
    }
};

// export function saveLocalList (list) {
//     let lists = JSON.parse(localStorage.getItem('projects'));
//     const listIndex = list.children[1].innerText;

//     for (let i = 0; i < lists.lentgh; i++) {
//         if (lists[i] === listIndex) {
//             lists[i] += '*';
//         }
//     }
//     localStorage.setItem('projects', JSON.stringify(lists));
// }