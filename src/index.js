import buildForm, { deleteSectionChildren } from "./displayJS/buildForm";
import sortMenuBurger from "./displayJS/sortMenu";
import landingPage from "./displayJS/landingPage";
import searchFunction from "./functionJS/searchProjects";

searchFunction();

const addProjectButton = document.getElementById('addProjectButton');
addProjectButton.addEventListener('click', buildForm, {once:true});

const sortMenu = document.getElementById('burger');
sortMenu.addEventListener('click', sortMenuBurger); 

const clearLocal = document.getElementById('clearLocal');

clearLocal.addEventListener('click', (e) => {
    if (!confirm('Are you sure?')) {
        e.preventDefault();
    } else {
        localStorage.clear();
        deleteSectionChildren()
        landingPage();
    }
})

window.onload = landingPage();



