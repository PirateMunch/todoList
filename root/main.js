(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{yp:()=>i,ZP:()=>o,th:()=>c});class n{constructor(e,t,n,o,c,i,d){return this.title=e,this.description=t,this.startDate=n,this.dueDate=o,this.priority=c,this.index=i,this.list=d,{title:e,description:t,startDate:n,dueDate:o,priority:c,index:i,list:d}}}function o(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((n=>{if(n.title===e.title){let e=t.indexOf(n);e>-1&&t.splice(e,1)}})),t.push(e),localStorage.setItem("projects",JSON.stringify(t))}function c(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((n=>{if(n.title===e.title){let e=t.indexOf(n);e>-1&&t.splice(e,1)}})),localStorage.setItem("projects",JSON.stringify(t))}function i(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((t=>{if(t.title===e.title){let t=document.getElementById(`${e.title+5}`);t.className="priorDiv";const n=document.createElement("div");n.className="sliderDiv",n.id="sliderDiv",u(n),t.replaceWith(n);const c=document.createElement("button");c.type="button",c.id="changeButton",c.className="changeButton",c.textContent="update",n.appendChild(c),c.addEventListener("click",(t=>{const c=document.getElementById("priorityRange");console.log(c.value),e.priority=c.value,console.log(e.priority);const i=t.target.parentNode.parentNode.parentNode;l(e,i),o(e);const a=t.target.parentNode.parentNode,r=d(e,a);n.replaceWith(r)}))}})),localStorage.setItem("projects",JSON.stringify(t))}function d(e,t){const n=document.createElement("div");n.className="projectFoot",n.id=`${e.title+5}`,t.appendChild(n);const o=document.createElement("input");o.type="button",o.id="priorityButton",o.className="priorityButton",o.value="Change priority",n.appendChild(o),o.addEventListener("click",(()=>{i(e)}));const d=document.createElement("button");d.className="deleteButton",d.dataset.delete="delete",d.id=`${e.index}`,d.innerHTML='<img src="delete1.svg">',n.appendChild(d),d.addEventListener("click",(()=>{c(e),g(),r()}))}function l(e,t){switch(e.priority){case"1":t.className="lowP";break;case"2":t.className="midP";break;case"3":t.className="highP"}}function a(){let e=this.nextElementSibling;"hiddenDiv"===e.className?e.classList.remove("hiddenDiv"):e.className="hiddenDiv"}function r(){let e=localStorage.getItem("projects");JSON.parse(e).forEach((e=>{!function(e){const n=document.getElementById("projectSection"),o=document.createElement("div");o.id=`${e.index}`,o.className="projectDiv",n.appendChild(o);const c=document.createElement("div");c.id=`${e.index}`,c.className="projectHead",o.appendChild(c),c.addEventListener("click",a);const i=document.createElement("div");i.className="projectName",i.textContent=`${e.title}`,c.appendChild(i);const r=document.createElement("div");r.className="startDate",r.innerText=`started\n    ${e.startDate}`,c.appendChild(r);const s=document.createElement("div");s.id=`${e.index}`,s.className="hiddenDiv",o.appendChild(s);const m=document.createElement("ul");m.className="projectTitle",m.id="projectTitle",s.appendChild(m);const p=document.createElement("div");p.className="listDescription",p.innerText=`${e.description}`,m.appendChild(p);const u=document.createElement("div");u.id="listDueDate",u.className="listDueDate",u.innerText=`Finish by : ${e.dueDate}`,m.appendChild(u);const y=document.createElement("ul");y.id=`${e.title}`,y.className="todoList",y.textContent="To-Do List",y.style.fontSize="1.5rem",y.style.fontWeight="700",m.appendChild(y),function(e){const t=e.list,n=document.getElementById(`${e.title}`);t.forEach((e=>{let t=document.createElement("li");const o=document.createElement("button");o.type="button",o.textContent="X",o.className="deleteItem",t.textContent=e,n.appendChild(t),t.appendChild(o)}))}(e),l(e,o);const g=document.createElement("div");g.className="todoDiv",s.appendChild(g);const E=document.createElement("input");E.type="text",E.className="listInput",E.id=`${e.title+10}`,E.placeholder="add to list",g.appendChild(E);const h=document.createElement("button");h.id="todoButton",h.className="todoButton",h.type="button",h.dataset.index=`${e.title}`,h.textContent="add",g.appendChild(h),h.addEventListener("click",(()=>{!function(e){const n=document.getElementById(`${e.title+10}`),o=document.getElementById(`${e.title}`),c=document.createElement("li");let i=e.list;c.textContent=n.value;const d=document.createElement("button");d.type="button",d.textContent="X",d.className="deleteItem",o.appendChild(c),c.appendChild(d),i.push(c.textContent),(0,t.getSetLocal)(e)}(e),E.value=""})),d(e,s)}(e)}))}function s(){const e=document.getElementById("addProjectButton"),t=document.getElementById("projectSection"),c=document.getElementById("title"),i=document.getElementById("description"),d=document.getElementById("dueDateInput"),l=document.getElementById("priorityRange"),a=document.getElementById("listInput1");let s=Math.floor(Math.random()*Date.now()),p=c.value,u=i.value,g=[m((E=new Date).getDate()),m(E.getMonth()+1),E.getFullYear()].join("-");var E;let h=d.value,v=l.value,C=s,f=[];""!==a.value&&f.push(a.value);const N=new n(p,u,g,h,v,C,f);e.textContent="add project",o(N),t.replaceChildren(),r(),y()}function m(e){return e.toString().padStart(2,"0")}function p(){if(null===localStorage.getItem("projects")){let e=[];localStorage.setItem("projects",JSON.stringify(e))}(function(){g();const e=document.getElementById("projectSection"),t=document.createElement("div");t.className="formDiv",e.appendChild(t);const n=document.createElement("form");n.name="form",n.id="form",n.className="form1",t.appendChild(n);const o=document.createElement("div");o.className="titleDiv",n.appendChild(o);const c=document.createElement("input");c.type="text",c.id="title",c.placeholder="Add Project Title",o.appendChild(c);const i=document.createElement("div");i.className="descriptionDiv",n.appendChild(i);const d=document.createElement("input");d.type="text",d.id="description",d.placeholder="Add a short description of your To-Do List project",i.appendChild(d);const l=document.createElement("div");l.className="dueDateDiv",n.appendChild(l);const a=document.createElement("label");a.textContent="Your ideal completion date :",l.appendChild(a);const r=document.createElement("input");r.type="date",r.id="dueDateInput",r.className="dueDateInput",l.appendChild(r);const s=document.createElement("div");s.className="listContainer",n.appendChild(s);const m=document.createElement("input");m.type="text",m.className="listInput1",m.id="listInput1",m.placeholder="Add your first To-Do list item",s.appendChild(m);const p=document.createElement("div");p.className="priorityContainer",p.textContent="Set priority level",n.appendChild(p);const y=document.createElement("div");y.className="priorityDiv",n.appendChild(y),u(y);const E=document.createElement("div");E.className="submitButtonDiv",n.appendChild(E);const h=document.createElement("button");return h.type="button",h.id="formSubmitButton",h.textContent="add project",E.appendChild(h),h})().addEventListener("click",s);const e=document.getElementById("addProjectButton");e.textContent="cancel form",e.addEventListener("click",(()=>{g(),r(),y()}))}function u(e){const t=document.createElement("div");t.className="priorityLabel",e.appendChild(t);const n=document.createElement("span");n.className="priorityLow",n.textContent="low",n.style.color="green",e.appendChild(n);const o=document.createElement("input");o.type="range",o.id="priorityRange",o.className="priorityRange",o.min="1",o.max="3",e.appendChild(o);const c=document.createElement("span");c.className="priorityHigh",c.textContent="high",c.style.color="red",e.appendChild(c)}function y(){const e=document.getElementById("addProjectButton");e.textContent="add project",e.addEventListener("click",p,{once:!0})}function g(){const e=document.getElementById("projectSection");let t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}function E(){var e=document.getElementById("burgerLinks");"block"===e.style.display?e.style.display="none":e.style.display="block"}document.getElementById("sortBy").addEventListener("click",E),document.getElementById("sortPriority").addEventListener("click",(()=>{!function(){let e=JSON.parse(localStorage.getItem("projects"));console.log(e[0].priority),e.sort((function(t,n){return 3==e[0].priority?t.priority-n.priority:n.priority-t.priority})),localStorage.setItem("projects",JSON.stringify(e)),g(),r()}()})),document.getElementById("sortStart").addEventListener("click",(()=>{console.log("Starts"),E()})),document.getElementById("sortFinish").addEventListener("click",(()=>{console.log("finishj"),E()})),document.getElementById("addProjectButton").addEventListener("click",p,{once:!0}),document.getElementById("clearLocal").addEventListener("click",(()=>{localStorage.clear()})),document.getElementById("burger").addEventListener("click",(()=>{console.log("burgers yo"),E()})),window.onload=function(){if(null===localStorage.getItem("projects")){const e=document.getElementById("projectSection"),t=document.createElement("div");t.className="startPage",t.textContent="No projects or lists found.\nAdd a project to get started!",e.appendChild(t)}else r()}()})();