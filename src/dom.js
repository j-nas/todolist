import taskData from "./data";
import { compareAsc, parseISO } from '../node_modules/date-fns'
const render = (() => {
  const title = () => {
    const titleBar = document.createElement("div");
    titleBar.classList.add("titlebar");
    container.appendChild(titleBar);
    const waterDrop = document.createElement("div");
    waterDrop.classList.add("waterDrop");
    waterDrop.innerHTML = `<i class="fas fa-bars"></i>`
    titleBar.appendChild(waterDrop);
    const _title = document.createElement("div")
    _title.innerHTML = `<h1>Doist</h1>`
    titleBar.appendChild(_title)
  };

  const menuItem = ({ label, dataset }) => ({
    label,
    dataset,
  });

  const defaultMenuItems = [
    menuItem({
      label: `<i class="fas fa-plus"></i> Add Project`,
      dataset: "add",
    }),
    menuItem({ label: "All Projects", dataset: "all" }),
    menuItem({ label: "Today", dataset: "today" }),
    menuItem({ label: "This Week", dataset: "week" }),
    menuItem({ label: "Important", dataset: "important" }),
    menuItem({ label: "Completed", dataset: "completed" }),
  ];

  
  const menu = (...projects) => {
    const _menu = document.querySelector(".menu");
    _menu.innerHTML = "";
    if (projects.length === false) {
      for (let i = projects.length - 1; i >= 0; i++) {
        console.log(defaultMenuItems[i]);
        let project = document.createElement("div");
        project.classList.add("menuItem");
        project.setAttribute("data-menu", `${projects[i].id}`);
        _menu.appendChild(project);
      }
    }
    for (let i = 0; i < defaultMenuItems.length; i++) {
      let newMenuItem = document.createElement("div");
      newMenuItem.classList.add("menuItem");
      newMenuItem.setAttribute(`data-menu`, `${defaultMenuItems[i].dataset}`);
      newMenuItem.innerHTML = defaultMenuItems[i].label;
      _menu.appendChild(newMenuItem);
    }
    menuSelection()
  };
  let selectedMenuItem = "all"
  const setMenuItem = (dataset) => {
    selectedMenuItem = dataset
  } 
  
  const menuSelection = () => {
    const _menuItem = Array.from(document.querySelectorAll(".menuItem"));
    _menuItem.forEach((sel) => sel.classList.remove("selected"));
    let selected = document.querySelector(
      `[data-menu="${selectedMenuItem}"]`
    );
    selected.classList.add("selected");
  };


  
  const drawCards = () => {
    let tasks = document.querySelector(".contentArea")
    tasks.innerHTML = ""
    let taskList = taskData.getTasks(selectedMenuItem)
    if (taskData.getTasks(selectedMenuItem) !== null ) {
      for (let i = 0; i < taskList.length; i++) { 
        let task = document.createElement("div")
        task.classList.add("task")
        tasks.appendChild(task)
        let taskTitle = document.createElement("div")
        taskTitle.classList.add("taskTitle") 
        task.appendChild(taskTitle)
        let taskName = document.createElement("div")
        taskName.classList.add("taskName")
        taskName.setAttribute("data-task", `${taskList[i].id}`)
        taskName.innerHTML = 
          `<span><i class="fas fa-minus"></i></span> ${taskList[i].title}`
        taskTitle.appendChild(taskName)
        let taskProject = document.createElement("div")
        taskProject.classList.add("taskProject")
        taskProject.setAttribute("data-task", `${taskList[i].id}`)
        taskProject.innerText = taskList[i].project
        taskTitle.appendChild(taskProject)
        let taskDate = document.createElement("div")
        taskDate.classList.add("taskDate")
        taskDate.setAttribute("data-task", `${taskList[i].id}`)
        taskDate.innerHTML = 
          `<input type="date" id="taskDate" value="${taskList[i].date}">`//gettaskdate
        if(compareAsc(
            parseISO(taskList[i].date), 
            parseISO(new Date().toISOString().slice(0,10))) < 0) {
          taskDate.style.color = "red"
        }
        taskTitle.appendChild(taskDate)                         //if taskdate < today make red

        let taskDesc = document.createElement("div")
        taskDesc.classList.add("taskDesc")
        taskDesc.setAttribute("data-task", `${taskList[i].id}`)
        taskDesc.innerHTML = 
          `<textarea resize="none" name="" id="description">${taskList[i].description}</textarea>`
        task.appendChild(taskDesc)

        let subTasks = document.createElement("div")
        subTasks.classList.add("subTasks")
        task.appendChild(subTasks)
        for (let j = 0; j < taskList[i].subtasks.length; j++) { //get subtasks
          let subtask = document.createElement("div")
          subtask.classList.add("subtask")
          subtask.setAttribute("data-task", `${taskList[i].id}`)
          subtask.innerHTML = 
            `<i class="fas fa-minus"></i> ` + taskList[i].subtasks[j]
          subTasks.appendChild(subtask)
        }
        let newSubtask = document.createElement("div")
        newSubtask.classList.add("subtask")
        newSubtask.id = "newSubtask"
        newSubtask.setAttribute("data-task", `${taskList[i].id}`)
        newSubtask.innerHTML = `<i class="fas fa-plus"></i> New subtask`
        subTasks.appendChild(newSubtask)
        let taskFooter = document.createElement("div")
        taskFooter.classList.add("taskFooter")
        if(taskList[i].complete == true) {
          taskFooter.style.backgroundColor = "green"
          taskFooter.style.color = "white"
        }
        task.appendChild(taskFooter)
        let taskComplete = document.createElement("div")
        taskComplete.classList.add("taskComplete")
        taskComplete.innerHTML = `<i class="fas fa-check"></i> Task Complete` //get
        taskFooter.appendChild(taskComplete)
        let taskImportant = document.createElement("div")
        taskImportant.classList.add("taskImportant")
        taskImportant.innerHTML = `<i class="fas fa-exclamation"></i>` //get important
        if(taskList[i].complete == true) {
          taskImportant.style.backgroundColor = "red"
        }
        taskFooter.appendChild(taskImportant)
      }

    }
    let addNewTask = document.createElement("div")
    addNewTask.classList.add("addNewTask")
    addNewTask.innerHTML = `<i class="fas fa-plus"></i> <span> New Task</span>`
    tasks.appendChild(addNewTask)
  }

  const base = () => {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    title();
    const _menu = document.createElement("div");
    _menu.classList.add("menu");
    container.appendChild(_menu);
    menu();
    const _tasks = document.createElement("div");
    _tasks.classList.add("contentArea");
    container.appendChild(_tasks);
    drawCards();
   
  };

  return {
    base,
    menu,
    drawCards,
    setMenuItem
  };
})();

export default render;
