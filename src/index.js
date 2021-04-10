import render from "./dom";
import { taskData, projectData } from "./data";
import { addMinutes } from "date-fns";
render.base();

const eventHandlers = (() => {
  let projectMenuActive = false;
  let subTaskBuffer = "";
  const contentArea = document.querySelector(".contentArea");
  const menu = document.querySelector(".menu");
  const bars = document.querySelector(".fa-bars");
  const titlebar = document.querySelector(".titlebar");
  titlebar.addEventListener("click", (e) => {
    if (
      e.target.className == "fas fa-bars" &&
      menu.style.visibility == "hidden"
    ) {
      menu.style.visibility = "visible";
      bars.style.transform = "rotate(45deg)";
      return;
    }
    if (
      e.target.className === "fas fa-bars" &&
      menu.style.visibility == "visible"
    ) {
      menu.style.visibility = "hidden";
      bars.style.transform = "";
      return;
    }
  });
  contentArea.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "addNewTask":
        taskData.newTask();
        render.drawCards();
        break;
      case "fas fa-minus":
        taskData.deleteTask(e.target.parentNode.dataset.task);
        render.drawCards();
        break;
      case "taskImportant":
        taskData.toggleImportant(e.target.dataset.task);
        // taskData.toggleComplete(e.target.dataset.task)
        render.drawCards();
        break;
      case "taskComplete":
        taskData.toggleComplete(e.target.dataset.task);
        render.drawCards();
        break;
      case "newSubtask":
        taskData.newSubTask(e.target.dataset.task);
        render.drawCards();
        break;
      case "fas fa-minus sub":
        taskData.delSubtask(
          e.target.parentNode.dataset.task,
          e.target.nextSibling.value
        );
        render.drawCards();
        break;
      case "taskProject":
        render.projectMenu(e.target.dataset.task);
        projectMenuActive = true;
        break;
      case "projMenuItem":
        taskData.addProject(e.target.dataset.proj, e.target.innerText);
        render.drawCards();
        break;
      case "projMenuItem clearProject":
        taskData.addProject(e.target.dataset.proj, "Add to a project");
      case "subtask":
        subTaskBuffer = e.target.value;
      default:
        if (projectMenuActive == true) {
          projectMenuActive = false;
          render.drawCards();
        }
        break;
    }
  });
  contentArea.addEventListener("focusout", (e) => {
    e.stopPropagation;
    switch (e.target.className) {
      case "taskNameInput":
        taskData.addTitle(e.target.dataset.task, e.target.value);
        render.drawCards();
        break;
      case "description":
        taskData.addDesc(e.target.dataset.task, e.target.value);
        render.drawCards();
        break;
      case "taskDate":
        taskData.addDate(e.target.dataset.task, e.target.value);
        render.drawCards();
      case "subtask":
        taskData.editSubtask(
          e.target.parentNode.dataset.task,
          subTaskBuffer,
          e.target.value
        );
        render.drawCards();
      default:
        break;
    }
  });
  menu.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (e.target.className == "menuItem") {
      switch (e.target.dataset.menu) {
        case "all":
          render.menu("all");
          render.drawCards();
          break;
        case "today":
          render.menu("today");
          render.drawCards();
          break;
        case "week":
          render.menu("week");
          render.drawCards();
          break;
        case "important":
          render.menu("important");
          render.drawCards();
          break;
        case "complete":
          render.menu("complete");
          render.drawCards();
          break;
        case "newTask":
          taskData.newTask();
          render.drawCards();
          break;
        case "add":
          projectData.addProject();
          render.menu(render.getSelectedMenuItem());
          break;
        default:
          render.menu(e.target.dataset.menu);
          render.drawCards();
          break;
      }
      bars.style.transform = "";
      menu.style.visibility = "hidden";
    }
    if (e.target.className == "fas fa-minus") {
      projectData.deleteProject(e.target.parentNode.dataset.menu);
      render.menu("all");
      render.drawCards();
    }
    if (e.target.className == "far fa-edit") {
      e.target.parentNode.innerHTML = `<input type="text" class="menuItem "id="projectEdit" 
        value="${e.target.parentNode.dataset.menu}">`;
      document.querySelector("#projectEdit").focus();
    }
  });
  menu.addEventListener("focusout", (e) => {
    projectData.renameProject(e.target.parentNode.dataset.menu, e.target.value);
    render.menu(render.getSelectedMenuItem);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      document.getElementById("blur-hack").focus();
    }
  });
})();
