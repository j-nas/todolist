import render from "./dom";
import { taskData, projectData } from "./data";
import { addMinutes } from "date-fns";
render.base();

const handlers = (() => {
  let projectMenuActive = false;
  let subTaskBuffer = ""
  const contentArea = document.querySelector(".contentArea");
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
        subTaskBuffer = e.target.value
      default:
        if (projectMenuActive == true) {
          projectMenuActive = false;
          render.drawCards();
        }
        break;
    }
  });
  contentArea.addEventListener("focusout", (e) => {
    e.stopPropagation
    switch (e.target.className) {
      case "taskNameInput":
        taskData.addTitle(e.target.dataset.task, e.target.value)
        render.drawCards()
        break;
      case "description":
        taskData.addDesc(e.target.dataset.task, e.target.value)
        render.drawCards()
        break
      case "taskDate":
        taskData.addDate(e.target.dataset.task, e.target.value)
        render.drawCards()
      case "subtask":
        taskData.editSubtask(
          e.target.parentNode.dataset.task, 
          subTaskBuffer, 
          e.target.value
        )
        render.drawCards()
      default:
        break;
    }
  })

  document.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
      document.getElementById("blur-hack").focus()
    }

    
  })
})();

