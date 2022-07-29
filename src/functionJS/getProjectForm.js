
export default function createProjectForm() {
    switchDisplay();
    const title = document.getElementById('addProject').value;
    const span = document.getElementById('formSpan');
    span.innerText = title;

};

export function switchDisplay() {
    const titleDiv = document.getElementById('formTitle');
    const formDiv = document.getElementById('projectForm');
    if (titleDiv.style.display == "flex") {
        titleDiv.style.display = "flex";
        formDiv.style.display = "none";
    } else {
        titleDiv.style.display = "none";
        formDiv.style.display = "grid";
    }
};