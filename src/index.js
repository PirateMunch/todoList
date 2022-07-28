import {projectClass} from "./functionJS/functionBundle";
import {defaultDisplay} from "./displayJS/displayBundle"; 
console.log("YOOOOO")



//test stuff below for display/styles

const title = "thistitle";
const description = "some text here";
const dueDate = "12/04/1928";
const priority = 5;

const title2 = "222thistitle";
const description2 = "22222222222222222222222some text here";
const dueDate2 = "12/04/1928";
const priority2 = 5;


const testProject  = new projectClass(title, description, dueDate, priority);
const testProject2  = new projectClass(title2, description2, dueDate2, priority2);

defaultDisplay(testProject);
defaultDisplay(testProject2);