import buildForm from "./displayJS/buildForm";
import sortMenuBurger from "./displayJS/sortMenu";
import landingPage from "./displayJS/landingPage";

const addProjectButton = document.getElementById('addProjectButton');
addProjectButton.addEventListener('click', buildForm, {once:true});

const sortMenu = document.getElementById('burger');
sortMenu.addEventListener('click', sortMenuBurger); 

const clearLocal = document.getElementById('clearLocal');
clearLocal.addEventListener('click', () => {
    localStorage.clear();
})

window.onload = landingPage();