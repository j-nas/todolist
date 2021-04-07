(()=>{"use strict";const e=(()=>{null==localStorage.getItem("idcount")&&(localStorage.setItem("idcount","0"),console.log("wut"));let e=+localStorage.getItem("idcount");console.log(e);const t=e=>{localStorage.setItem("tasks",JSON.stringify(e))},a=()=>null==JSON.parse(localStorage.getItem("tasks"))?[]:(console.log(JSON.parse(localStorage.getItem("tasks"))),JSON.parse(localStorage.getItem("tasks")));return{addTitle:(e,n)=>{let r=a(),s=r.filter((t=>t.id==e));r[r.indexOf(s[0])].title=n,t(r)},newTask:()=>{let n=a(),r=(new Date).toISOString().slice(0,10);e+=1,localStorage.setItem("idcount",e),n.push({title:"untitled",id:e,date:r,description:"Add description here",important:!1,complete:!1,project:"Add to a project",subtasks:[]}),t(n)},getTasks:e=>{switch(e){case"all":return JSON.parse(localStorage.getItem("tasks"))}},addDate:(e,n)=>{let r=a(),s=r.filter((t=>t.id==e));r[r.indexOf(s[0])].date=n,t(r)},addDesc:(e,n)=>{let r=a(),s=r.filter((t=>t.id==e));r[r.indexOf(s[0])].description=n,t(r)},addProject:(e,n)=>{let r=a(),s=r.filter((t=>t.id==e));r[r.indexOf(s[0])].project=n,t(r)},toggleComplete:e=>{let t=taskList.filter((t=>t.id==e)),a=taskList.indexOf(t[0]);console.log(ompleteIndex),!0===taskList[a].complete?taskList[a].complete=!1:taskList[a].complete=!0},toggleImportant:e=>{let n=a(),r=n.filter((t=>t.id==e)),s=n.indexOf(r[0]);!0===n[s].important?n[s].important=!1:n[s].important=!0,t(n)},getProperty:(e,t)=>{let a=taskList.filter((t=>t.id==e));return taskList[taskList.indexOf(a[0])][t]},pushToLocal:t,returnLocal:a,newSubTask:(e,n)=>{let r=a(),s=r.filter((t=>t.id==e));r[r.indexOf(s[0])].push(n),t(r)},delSubtask:(e,t)=>{a().filter,subtaskToDelete}}})(),t=()=>(localStorage.getItem("projects")||localStorage.setItem("projects","[]"),JSON.parse(localStorage.getItem("projects")));function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(e,t){a(2,arguments);var r=n(e),s=n(t),l=r.getTime()-s.getTime();return l<0?-1:l>0?1:l}function s(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var l=36e5,i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,o=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e,t){a(1,arguments);var n=t||{},r=null==n.additionalDigits?2:s(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var l,i=m(e);if(i.date){var d=p(i.date,r);l=g(d.restDateString,d.year)}if(isNaN(l)||!l)return new Date(NaN);var o,c=l.getTime(),u=0;if(i.time&&(u=k(i.time),isNaN(u)||null===u))return new Date(NaN);if(!i.timezone){var f=new Date(c+u),h=new Date(0);return h.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),h.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),h}return o=T(i.timezone),isNaN(o)?new Date(NaN):new Date(c+u+o)}function m(e){var t,a={},n=e.split(i.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],i.timeZoneDelimiter.test(a.date)&&(a.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=i.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}function p(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),s=n[2]&&parseInt(n[2]);return{year:null==s?r:100*s,restDateString:e.slice((n[1]||n[2]).length)}}function g(e,t){if(null===t)return null;var a=e.match(d);if(!a)return null;var n=!!a[4],r=f(a[1]),s=f(a[2])-1,l=f(a[3]),i=f(a[4]),o=f(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,i,o)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=7*(t-1)+a+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+r),n}(t,i,o):new Date(NaN);var c=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(v[t]||(L(e)?29:28))}(t,s,l)&&function(e,t){return t>=1&&t<=(L(e)?366:365)}(t,r)?(c.setUTCFullYear(t,s,Math.max(r,l)),c):new Date(NaN)}function f(e){return e?parseInt(e):1}function k(e){var t=e.match(o);if(!t)return null;var a=h(t[1]),n=h(t[2]),r=h(t[3]);return function(e,t,a){return 24===e?0===t&&0===a:a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r)?a*l+6e4*n+1e3*r:NaN}function h(e){return e&&parseFloat(e.replace(",","."))||0}function T(e){if("Z"===e)return 0;var t=e.match(c);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?a*(n*l+6e4*r):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function L(e){return e%400==0||e%4==0&&e%100}const b=(()=>{const a='<i class="fas fa-plus"></i>',n='<i class="fas fa-minus"></i>',s='<i class="fas fa-exclamation"></i>',l='<i class="fas fa-bars"></i>',i=()=>{const e=document.createElement("div");e.classList.add("titlebar"),container.appendChild(e);const t=document.createElement("div");t.classList.add("waterDrop"),t.innerHTML=l,e.appendChild(t);const a=document.createElement("div");a.innerHTML="<h1>Doist</h1>",e.appendChild(a)},d=({label:e,dataset:t})=>({label:e,dataset:t}),o=[d({label:a+" Add Project",dataset:"add"}),d({label:"All Projects",dataset:"all"}),d({label:"Today",dataset:"today"}),d({label:"This Week",dataset:"week"}),d({label:"Important",dataset:"important"}),d({label:"Completed",dataset:"completed"})],c=()=>{const e=document.querySelector(".menu");e.innerHTML="";let a=t();if(a.length)for(let t=a.length-1;t>=0;t++){console.log(o[t]);let n=document.createElement("div");n.classList.add("menuItem"),n.setAttribute("data-menu",`${a[t]}`),e.appendChild(n)}for(let t=0;t<o.length;t++){let a=document.createElement("div");a.classList.add("menuItem"),a.setAttribute("data-menu",`${o[t].dataset}`),a.innerHTML=o[t].label,e.appendChild(a)}p()};let m="all";const p=()=>{Array.from(document.querySelectorAll(".menuItem")).forEach((e=>e.classList.remove("selected"))),document.querySelector(`[data-menu="${m}"]`).classList.add("selected")},g=()=>{let t=document.querySelector(".contentArea");t.innerHTML="";let l=e.getTasks(m);if(null!==e.getTasks(m))for(let e=0;e<l.length;e++){let i=document.createElement("div");i.classList.add("task"),t.appendChild(i);let d=document.createElement("div");d.classList.add("taskTitle"),i.appendChild(d);let o=document.createElement("div");o.classList.add("taskName"),o.setAttribute("data-task",`${l[e].id}`),o.innerHTML=`<span>${n}</span>\n          <input type="text data-task="${l[e].id}" id="taskName" \n          value="${l[e].title}">`,d.appendChild(o);let c=document.createElement("div");c.classList.add("taskProject"),c.setAttribute("data-task",`${l[e].id}`),c.innerText=l[e].project,d.appendChild(c);let m=document.createElement("div");m.classList.add("taskDate"),m.setAttribute("data-task",`${l[e].id}`),m.innerHTML=`<input type="date" id="taskDate" data-task="${l[e].id}" value="${l[e].date}">`,r(u(l[e].date),u((new Date).toISOString().slice(0,10)))<0&&(m.style.color="red"),d.appendChild(m);let p=document.createElement("div");p.classList.add("taskDesc"),p.setAttribute("data-task",`${l[e].id}`),p.innerHTML=`<textarea resize="none" data-task="${l[e].id}" id="description">${l[e].description}</textarea>`,i.appendChild(p);let g=document.createElement("div");g.classList.add("subTasks"),i.appendChild(g);for(let t=0;t<l[e].subtasks.length;t++){let a=document.createElement("div");a.classList.add("subtask"),a.setAttribute("data-task",`${l[e].id}`),a.innerHTML=n+l[e].subtasks[t],g.appendChild(a)}let f=document.createElement("div");f.classList.add("subtask"),f.id="newSubtask",f.setAttribute("data-task",`${l[e].id}`),f.innerHTML=a+" New subtask",g.appendChild(f);let k=document.createElement("div");k.classList.add("taskFooter"),1==l[e].complete&&(k.style.backgroundColor="green",k.style.color="white"),i.appendChild(k);let h=document.createElement("div");h.classList.add("taskComplete"),h.innerHTML='<i class="fas fa-check"></i> Task Complete',k.appendChild(h);let T=document.createElement("div");T.classList.add("taskImportant"),T.innerHTML=s,1==l[e].complete&&(T.style.backgroundColor="red"),k.appendChild(T)}let i=document.createElement("div");i.classList.add("addNewTask"),i.innerHTML=`${a} <span> New Task</span>`,t.appendChild(i)};return{base:()=>{const e=document.querySelector("#container");e.innerHTML="",i();const t=document.createElement("div");t.classList.add("menu"),e.appendChild(t),c();const a=document.createElement("div");a.classList.add("contentArea"),e.appendChild(a),g()},menu:c,drawCards:g,setMenuItem:e=>{m=e},projectMenu:e=>{let a=document.querySelector(`.taskProject[data-task="${e}"]`),n=document.createElement("div");console.log(a),n.classList.add("dropMenu"),a.appendChild(n);let r=t();for(let e=0;e<r.Length;e++){let t=document.createElement("div");t.classList.add("projMenuItem"),t.setAttribute("data-proj",e),t.innerHTML=r[e],n.appendChild(t)}}}})();b.base(),document.querySelector(".addNewTask").addEventListener("click",(()=>{e.newTask(),b.drawCards()})),console.log(e.getTasks("all"))})();