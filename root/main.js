(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{yp:()=>d,ZP:()=>o,th:()=>c});class n{constructor(e,t,n,o,c,d,i){return this.title=e,this.description=t,this.startDate=n,this.dueDate=o,this.priority=c,this.index=d,this.list=i,{title:e,description:t,startDate:n,dueDate:o,priority:c,index:d,list:i}}}function o(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((n=>{if(n.title===e.title){let e=t.indexOf(n);e>-1&&t.splice(e,1)}})),t.push(e),localStorage.setItem("projects",JSON.stringify(t))}function c(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((n=>{if(n.title===e.title){let e=t.indexOf(n);e>-1&&t.splice(e,1)}})),localStorage.setItem("projects",JSON.stringify(t))}function d(e){let t=JSON.parse(localStorage.getItem("projects"));t.forEach((t=>{if(t.title===e.title){let t=document.getElementById(`${e.title+5}`);t.className="priorDiv";const n=document.createElement("div");n.className="sliderDiv",n.id="sliderDiv",u(n),t.replaceWith(n);const c=document.createElement("button");c.type="button",c.id="changeButton",c.className="changeButton",c.textContent="update",n.appendChild(c),c.addEventListener("click",(t=>{const c=document.getElementById("priorityRange");console.log(c.value),e.priority=c.value,console.log(e.priority);const d=t.target.parentNode.parentNode.parentNode;a(e,d),o(e);const l=t.target.parentNode.parentNode,s=i(e,l);n.replaceWith(s)}))}})),localStorage.setItem("projects",JSON.stringify(t))}function i(e,t){const n=document.createElement("div");n.className="projectFoot",n.id=`${e.title+5}`,t.appendChild(n);const o=document.createElement("input");o.type="button",o.id="priorityButton",o.className="priorityButton",o.value="Change priority",n.appendChild(o),o.addEventListener("click",(()=>{d(e)}));const i=document.createElement("button");i.className="deleteButton",i.dataset.delete="delete",i.id=`${e.index}`,i.innerHTML='<img src="delete1.svg">',n.appendChild(i),i.addEventListener("click",(()=>{c(e),E(),s()}))}function a(e,t){switch(e.priority){case"1":t.className="lowP";break;case"2":t.className="midP";break;case"3":t.className="highP"}}function l(){let e=this.nextElementSibling;"hiddenDiv"===e.className?e.classList.remove("hiddenDiv"):e.className="hiddenDiv"}function s(){let e=localStorage.getItem("projects");JSON.parse(e).forEach((e=>{!function(e){const n=document.getElementById("projectSection"),o=document.createElement("div");o.id=`${e.index}`,o.className="projectDiv",n.appendChild(o);const c=document.createElement("div");c.id=`${e.index}`,c.className="projectHead",o.appendChild(c),c.addEventListener("click",l);const d=document.createElement("div");d.className="projectName",d.textContent=`${e.title}`,c.appendChild(d);const s=document.createElement("div");s.className="startDate",s.innerText=`started\n    ${e.startDate}`,c.appendChild(s);const r=document.createElement("div");r.id=`${e.index}`,r.className="hiddenDiv",o.appendChild(r);const m=document.createElement("ul");m.className="projectTitle",m.id="projectTitle",r.appendChild(m);const p=document.createElement("div");p.className="listDescription",p.innerText=`${e.description}`,m.appendChild(p);const u=document.createElement("div");u.id="listDueDate",u.className="listDueDate",u.innerText=`Finish by : ${e.dueDate}`,m.appendChild(u);const h=document.createElement("ul");h.id=`${e.title}`,h.className="todoList",h.textContent="To-Do List",h.style.fontSize="1.5rem",h.style.fontWeight="700",m.appendChild(h),function(e){const t=e.list,n=document.getElementById(`${e.title}`);t.forEach((e=>{let t=document.createElement("li");const o=document.createElement("button");o.type="button",o.textContent="X",o.className="deleteItem",t.textContent=e,n.appendChild(t),t.appendChild(o)}))}(e),a(e,o);const E=document.createElement("div");E.className="todoDiv",r.appendChild(E);const g=document.createElement("input");g.type="text",g.className="listInput",g.id=`${e.title+10}`,g.placeholder="add to list",E.appendChild(g);const y=document.createElement("button");y.id="todoButton",y.className="todoButton",y.type="button",y.dataset.index=`${e.title}`,y.textContent="add",E.appendChild(y),y.addEventListener("click",(()=>{!function(e){const n=document.getElementById(`${e.title+10}`),o=document.getElementById(`${e.title}`),c=document.createElement("li");let d=e.list;c.textContent=n.value;const i=document.createElement("button");i.type="button",i.textContent="X",i.className="deleteItem",o.appendChild(c),c.appendChild(i),d.push(c.textContent),(0,t.getSetLocal)(e)}(e),g.value=""})),i(e,r)}(e)}))}function r(){const e=document.getElementById("addProjectButton"),t=document.getElementById("projectSection"),c=document.getElementById("title"),d=document.getElementById("description"),i=document.getElementById("dueDateInput"),a=document.getElementById("priorityRange"),l=document.getElementById("listInput1");let r=Math.floor(Math.random()*Date.now()),p=c.value,u=d.value,E=[m((g=new Date).getDate()),m(g.getMonth()+1),g.getFullYear()].join("-");var g;let y=i.value,v=a.value,C=r,N=[];""!==l.value&&N.push(l.value);const f=new n(p,u,E,y,v,C,N);e.textContent="add project",o(f),t.replaceChildren(),s(),h()}function m(e){return e.toString().padStart(2,"0")}function p(){if(null===localStorage.getItem("projects")){let e=[];localStorage.setItem("projects",JSON.stringify(e))}(function(){E();const e=document.getElementById("projectSection"),t=document.createElement("div");t.className="formDiv",e.appendChild(t);const n=document.createElement("form");n.name="form",n.id="form",n.className="form1",t.appendChild(n);const o=document.createElement("div");o.className="titleDiv",n.appendChild(o);const c=document.createElement("input");c.type="text",c.id="title",c.placeholder="Add Project Title",o.appendChild(c);const d=document.createElement("div");d.className="descriptionDiv",n.appendChild(d);const i=document.createElement("input");i.type="text",i.id="description",i.placeholder="Add a short description of your To-Do List project",d.appendChild(i);const a=document.createElement("div");a.className="dueDateDiv",n.appendChild(a);const l=document.createElement("label");l.textContent="Your ideal completion date :",a.appendChild(l);const s=document.createElement("input");s.type="date",s.id="dueDateInput",s.className="dueDateInput",a.appendChild(s);const r=document.createElement("div");r.className="listContainer",n.appendChild(r);const m=document.createElement("input");m.type="text",m.className="listInput1",m.id="listInput1",m.placeholder="Add your first To-Do list item",r.appendChild(m);const p=document.createElement("div");p.className="priorityContainer",p.textContent="Set priority level",n.appendChild(p);const h=document.createElement("div");h.className="priorityDiv",n.appendChild(h),u(h);const g=document.createElement("div");g.className="submitButtonDiv",n.appendChild(g);const y=document.createElement("button");return y.type="button",y.id="formSubmitButton",y.textContent="add project",g.appendChild(y),y})().addEventListener("click",r);const e=document.getElementById("addProjectButton");e.textContent="cancel form",e.addEventListener("click",(()=>{E(),s(),h()}))}function u(e){const t=document.createElement("div");t.className="priorityLabel",e.appendChild(t);const n=document.createElement("span");n.className="priorityLow",n.textContent="low",n.style.color="green",e.appendChild(n);const o=document.createElement("input");o.type="range",o.id="priorityRange",o.className="priorityRange",o.min="1",o.max="3",e.appendChild(o);const c=document.createElement("span");c.className="priorityHigh",c.textContent="high",c.style.color="red",e.appendChild(c)}function h(){const e=document.getElementById("addProjectButton");e.textContent="add project",e.addEventListener("click",p,{once:!0})}function E(){const e=document.getElementById("projectSection");let t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}document.getElementById("addProjectButton").addEventListener("click",p,{once:!0}),document.getElementById("clearLocal").addEventListener("click",(()=>{localStorage.clear()})),document.getElementById("burger").addEventListener("click",s),window.onload=function(){if(null===localStorage.getItem("projects")){const e=document.getElementById("projectSection"),t=document.createElement("div");t.className="startPage",t.textContent="No projects or lists found.\nAdd a project to get started!",e.appendChild(t)}else s()}()})();