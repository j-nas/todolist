import render from "./dom"
import { taskData, projectData } from "./data"
import { addMinutes } from "date-fns"
render.base()


const handlers = (() => { 
  const contentArea = document.querySelector(".contentArea")
  contentArea.addEventListener("click", (e) => {
    console.log(e.target.className)
    switch (e.target.className) {
      case "addNewTask":
        taskData.newTask()
        render.drawCards()
        break;
      case "fas fa-minus":
        taskData.deleteTask(e.target.parentNode.dataset.task)
        render.drawCards()
        break;
      
      case "taskImportant":
        taskData.toggleImportant(e.target.dataset.task)  
        taskData.toggleComplete(e.target.dataset.task)
        render.drawCards()
      case "taskComplete":
        taskData.toggleComplete(e.target.dataset.task)
        render.drawCards()
      case "subtask":
        taskData.newSubTask(e.target.dataset.task)
      default:
        
        
        break;
    }
  })
  
 
})()


console.log(taskData.getTasks("all"))