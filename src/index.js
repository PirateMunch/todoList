
import buildForm from "./displayJS/buildForm";
import homeDisplay from "./displayJS/homeDisplay";
import landingPage from "./displayJS/landingPage";


const addProjectButton = document.getElementById('addProjectButton');
addProjectButton.addEventListener('click', buildForm, {once:true});

const clearLocal = document.getElementById('clearLocal');
clearLocal.addEventListener('click', () => {
    localStorage.clear();
})



//burger menu tests
const burger = document.getElementById('burger');
burger.addEventListener('click', homeDisplay); 

window.onload = landingPage();