import {ProjectClass, createProjectForm, getUserData} from "./functionJS/functionBundle";
import {defaultDisplay, burgerMenu} from "./displayJS/displayBundle"; 
console.log("YOOOOO")


const addProjectButton = document.getElementById('addProjectButton');


const submitButton = document.getElementById('formSubmitButton');

//burger menu tests

const burger = document.getElementById('burger');

burger.addEventListener('click', burgerMenu); 


//test stuff below for display/styles

// const title = "thistitle";
// const description = "some text here";
// const startDate = "01/01/0000"
// const dueDate = "12/04/1928";
// const priority = 5;

// const title2 = "222thistitle";
// const description2 = "22222222222222222222222some text here";
// const startDate2 = "22/22/2222"
// const dueDate2 = "12/04/1928";
// const priority2 = 5;


// const testProject  = new ProjectClass(title, description, startDate, dueDate, priority);
// const testProject2  = new ProjectClass(title2, description2, startDate2, dueDate2, priority2);

// defaultDisplay(testProject);
// defaultDisplay(testProject2);

// submitButton.addEventListener('click', getUserData);
addProjectButton.addEventListener('click', createProjectForm);