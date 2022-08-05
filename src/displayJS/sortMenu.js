import { deleteSectionChildren } from "./buildForm";
import homeDisplay from "./homeDisplay";

const sortBy = document.getElementById('sortBy');
sortBy.addEventListener('click', sortMenuBurger);
  
const sortPriority = document.getElementById('sortPriority');
sortPriority.addEventListener('click', sortByPriority)
  
const sortStart = document.getElementById('sortStart');
sortStart.addEventListener('click', sortByStart)

const sortFinish = document.getElementById('sortFinish');
sortFinish.addEventListener('click', sortByFinish)

export default function sortMenuBurger() {
    var x = document.getElementById("burgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

function sortByPriority () {
  sortMenuBurger()
  let projects = JSON.parse(localStorage.getItem('projects'));
  projects.sort(function(a, b) {
    if (projects[0].priority ==  3) {return a.priority - b.priority;}
    else return b.priority - a.priority
  });

  localStorage.setItem('projects', JSON.stringify(projects));
  deleteSectionChildren()
  homeDisplay()
}

function sortByFinish () {
  sortMenuBurger()
  let projects = JSON.parse(localStorage.getItem('projects'));
  projects.sort(function(a, b) {
    if (projects[0].dueDate > projects[1].dueDate) {
    let x = new Date(a.dueDate),
        y = new Date(b.dueDate);
    return x - y;
    } else {
        let x = new Date(a.dueDate),
        y = new Date(b.dueDate);
    return y - x;
    }
  });
  localStorage.setItem('projects', JSON.stringify(projects));
  deleteSectionChildren()
  homeDisplay()
}

function sortByStart () {
  sortMenuBurger()
  let projects = JSON.parse(localStorage.getItem('projects'));
  projects.sort(function(a, b) {
    if (projects[0].startDate > projects[1].startDate) {
    let x = new Date(a.startDate),
        y = new Date(b.startDate);
    return x - y;
    } else {
        let x = new Date(a.startDate),
        y = new Date(b.startDate);
    return y - x;
    }
  });
  localStorage.setItem('projects', JSON.stringify(projects));
  deleteSectionChildren()
  homeDisplay()
}