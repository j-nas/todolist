import render from "./dom"
import taskData from "./data"
render.base()



const newTask = document.querySelector(".addNewTask")
newTask.addEventListener("click", () => {
  taskData.newTask()
})


console.log(taskData.getTasks("all"))