(()=>{var e={471:()=>{console.log("not emptry")}},t={};function a(s){var d=t[s];if(void 0!==d)return d.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}(()=>{"use strict";a(471),(()=>{const e=()=>{const e=document.createElement("div");e.classList.add("titlebar"),container.appendChild(e);const t=document.createElement("div");t.classList.add("waterDrop"),t.innerHTML='<i class="fas fa-bars"></i>',e.appendChild(t);const a=document.createElement("div");a.innerHTML="<h1>Doist</h1>",e.appendChild(a)},t=({label:e,dataset:t})=>({label:e,dataset:t}),a=[t({label:'<i class="fas fa-plus"></i> Add Project',dataset:"add"}),t({label:"All Projects",dataset:"all"}),t({label:"Today",dataset:"today"}),t({label:"This Week",dataset:"week"}),t({label:"Important",dataset:"important"}),t({label:"Completed",dataset:"completed"})],s=(...e)=>{const t=document.querySelector(".menu");if(t.innerHTML="",!1===e.length)for(let s=e.length-1;s>=0;s++){console.log(a[s]);let d=document.createElement("div");d.classList.add("menuItem"),d.setAttribute("data-menu",`${e[s].id}`),t.appendChild(d)}for(let e=0;e<a.length;e++){let s=document.createElement("div");s.classList.add("menuItem"),s.setAttribute("data-menu",`${a[e].dataset}`),s.innerHTML=a[e].label,t.appendChild(s)}n()};let d="all";const n=e=>{Array.from(document.querySelectorAll(".menuItem")).forEach((e=>e.classList.remove("selected"))),document.querySelector(`[data-menu="${d}"]`).classList.add("selected")},l=()=>{let e=document.querySelector(".contentArea"),t=["one taks","another tasks"],a=["not empty"];for(let s=0;s<a.length;s++){let a=document.createElement("div");a.classList.add("task"),e.appendChild(a);let d=document.createElement("div");d.classList.add("taskTitle"),a.appendChild(d);let n=document.createElement("div");n.classList.add("taskName"),n.innerHTML='<span><i class="fas fa-minus"></i></span> Task Name',d.appendChild(n);let l=document.createElement("div");l.classList.add("taskProject"),l.innerText="Project 1",d.appendChild(l);let i=document.createElement("div");i.classList.add("taskDate"),i.innerHTML='<input type="date" id="taskDate">',d.appendChild(i);let c=document.createElement("div");c.classList.add("taskDesc"),c.innerHTML='<textarea resize="none" name="" id="description">Add description here</textarea>',a.appendChild(c);let r=document.createElement("div");for(r.classList.add("subTasks"),a.appendChild(r);s<t.length;s++){let e=document.createElement("div");e.classList.add("subtask"),e.innerHTML='<i class="fas fa-minus"></i> '+t[s],r.appendChild(e)}let o=document.createElement("div");o.classList.add("subtask"),o.id="newSubtask",o.innerHTML='<i class="fas fa-plus"></i> New subtask',r.appendChild(o);let m=document.createElement("div");m.classList.add("taskFooter"),a.appendChild(m);let p=document.createElement("div");p.classList.add("taskComplete"),p.innerHTML='<i class="fas fa-check"></i> Task Complete',m.appendChild(p);let u=document.createElement("div");u.classList.add("taskImportant"),u.innerHTML='<i class="fas fa-exclamation"></i>',m.appendChild(u);let L=document.createElement("div");L.classList.add("addNewTask"),L.innerHTML='<i class="fas fa-plus"></i> <span> New Task</span>',e.appendChild(L)}};return{base:()=>{const t=document.querySelector("#container");t.innerHTML="",e();const a=document.createElement("div");a.classList.add("menu"),t.appendChild(a),s();const d=document.createElement("div");d.classList.add("contentArea"),t.appendChild(d),l()},menu:s,drawCards:l,setMenuItem:e=>{d=e}}})().base()})()})();