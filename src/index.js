import {ProjectClass, createProjectForm, formSubmit} from "./functionJS/functionBundle";
import {defaultDisplay, burgerMenu, buildForm} from "./displayJS/displayBundle"; 
import homeDisplay from "./displayJS/homeDisplay";


const addProjectButton = document.getElementById('addProjectButton');

addProjectButton.addEventListener('click', buildForm, {once:true});


//burger menu tests
const burger = document.getElementById('burger');
burger.addEventListener('click', homeDisplay); 

window.onload = homeDisplay();