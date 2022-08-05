import sortMenuBurger from "./displayJS/sortMenu";
import buildForm from "./displayJS/buildForm";
import landingPage from "./displayJS/landingPage";


const addProjectButton = document.getElementById('addProjectButton');
addProjectButton.addEventListener('click', buildForm, {once:true});

const clearLocal = document.getElementById('clearLocal');
clearLocal.addEventListener('click', () => {
    localStorage.clear();
})



//burger menu tests
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
    console.log("burgers yo")
    sortMenuBurger()
}); 

window.onload = landingPage();