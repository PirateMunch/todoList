import { deleteSectionChildren } from "./buildForm";
import homeDisplay from "./homeDisplay";

const sortBy = document.getElementById('sortBy');
sortBy.addEventListener('click', sortMenuBurger)
  
const sortPriority = document.getElementById('sortPriority');
sortPriority.addEventListener('click', () => {
  sortByPriority()
  // sortMenuBurger()
})
  
const sortStart = document.getElementById('sortStart');
sortStart.addEventListener('click', () => {
  console.log("Starts")

  sortMenuBurger()
})

const sortFinish = document.getElementById('sortFinish');
sortFinish.addEventListener('click', () => {
  console.log("finishj")

  sortMenuBurger()
})

export default function sortMenuBurger() {
    var x = document.getElementById("burgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

function sortByPriority () {
  let projects = JSON.parse(localStorage.getItem('projects'));
console.log(projects[0].priority)
  projects.sort(function(a, b) {
    if (projects[0].priority ==  3) {return a.priority - b.priority;}
    else return b.priority - a.priority
    
  });

  localStorage.setItem('projects', JSON.stringify(projects));
  deleteSectionChildren()
  homeDisplay()

}