import homeDisplay from "./homeDisplay";

export default function landingPage () {
    if (localStorage.getItem('projects') === null) {
        const section = document.getElementById('projectSection');
        const startPage = document.createElement('div');
        startPage.className = "startPage";
        startPage.textContent = `No projects or lists found.
        \nAdd a project to get started!`;
        section.appendChild(startPage);
    } else {
        homeDisplay();
    };
};