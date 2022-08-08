import {deleteSectionChildren} from './buildForm';
import homeDisplay from './homeDisplay';

const sortBy = document.getElementById('sortBy');
sortBy.addEventListener('click', sortMenuBurger);

const sortPriority = document.getElementById('sortPriority');
sortPriority.addEventListener('click', sortByPriority);

const sortStart = document.getElementById('sortStart');
sortStart.addEventListener('click', sortByStart);

const sortFinish = document.getElementById('sortFinish');
sortFinish.addEventListener('click', sortByFinish);

export default function sortMenuBurger() {
    const burgerDiv = document.getElementById('burgerLinks');
    if (burgerDiv.style.display === 'block') {
        burgerDiv.style.display = 'none';
    } else {
        burgerDiv.style.display = 'block';
    }
}

function sortByPriority() {
    sortMenuBurger();
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.sort(function (a, b) {
        if (projects[0].priority == 3) {
            return a.priority - b.priority;
        } else return b.priority - a.priority;
    });

    localStorage.setItem('projects', JSON.stringify(projects));
    deleteSectionChildren();
    homeDisplay();
}

function sortByFinish() {
    sortMenuBurger();
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.sort(function (a, b) {
        if (projects[0].dueDate > projects[1].dueDate) {
            const x = new Date(a.dueDate),
                y = new Date(b.dueDate);
            return x - y;
        } else {
            const x = new Date(a.dueDate),
                y = new Date(b.dueDate);
            return y - x;
        }
    });
    localStorage.setItem('projects', JSON.stringify(projects));
    deleteSectionChildren();
    homeDisplay();
}

function sortByStart() {
    sortMenuBurger();
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.sort(function (a, b) {
        if (projects[0].startDate > projects[1].startDate) {
            const x = new Date(a.startDate),
                y = new Date(b.startDate);
            return x - y;
        } else {
            const x = new Date(a.startDate),
                y = new Date(b.startDate);
            return y - x;
        }
    });
    localStorage.setItem('projects', JSON.stringify(projects));
    deleteSectionChildren();
    homeDisplay();
}
