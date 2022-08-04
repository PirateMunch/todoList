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