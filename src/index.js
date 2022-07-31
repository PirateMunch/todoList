import {ProjectClass, createProjectForm, formSubmit} from "./functionJS/functionBundle";
import {defaultDisplay, burgerMenu, buildForm} from "./displayJS/displayBundle"; 
console.log("YOOOOO")


const addProjectButton = document.getElementById('addProjectButton');

addProjectButton.addEventListener('click', buildForm, {once:true});


//burger menu tests
const burger = document.getElementById('burger');
burger.addEventListener('click', burgerMenu); 

