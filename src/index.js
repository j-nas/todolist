import render from "./dom"
import { taskData, projectData } from "./data"
render.base()

const handlers = (() => { 
  const newTask = document.querySelector(".addNewTask")
  newTask.addEventListener("click", () => {
    taskData.newTask()
    render.drawCards()
  })
  
})()


console.log(taskData.getTasks("all"))