import taskData from "./data";

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


  const defaultTextArea = `<textarea resize="none" name="" id="description">Add description here</textarea>`
  
  const drawCards = () => {
    let tasks = document.querySelector(".contentArea")
    let _subTasks = ["one taks", 'another tasks']
    let cardList = ["not empty"]
    if (taskData.getTasks(selectedMenuItem) !== []) {
      for (let i = 0; i < cardList.length; i++) { //convert to gettasks
        let task = document.createElement("div")
        task.classList.add("task")
        tasks.appendChild(task)
        let taskTitle = document.createElement("div")
        taskTitle.classList.add("taskTitle") 
        task.appendChild(taskTitle)
        let taskName = document.createElement("div")
        taskName.classList.add("taskName") //add task id dataset
        taskName.innerHTML = `<span><i class="fas fa-minus"></i></span> Task Name`//gettaskname
        taskTitle.appendChild(taskName)
        let taskProject = document.createElement("div")
        taskProject.classList.add("taskProject")//add task id dataset
        taskProject.innerText = "Project 1"//gettaskproject
        taskTitle.appendChild(taskProject)
        let taskDate = document.createElement("div")
        taskDate.classList.add("taskDate")
        taskDate.innerHTML = `<input type="date" id="taskDate">`
        taskTitle.appendChild(taskDate)

        let taskDesc = document.createElement("div")
        taskDesc.classList.add("taskDesc")
        taskDesc.innerHTML = defaultTextArea
        task.appendChild(taskDesc)

        let subTasks = document.createElement("div")
        subTasks.classList.add("subTasks")
        task.appendChild(subTasks)
        for (let j = 0; i < _subTasks.length; i++) {
          let subtask = document.createElement("div")
          subtask.classList.add("subtask")
          subtask.innerHTML = `<i class="fas fa-minus"></i> ` + _subTasks[i]
          subTasks.appendChild(subtask)
        }
        let newSubtask = document.createElement("div")
        newSubtask.classList.add("subtask")
        newSubtask.id = "newSubtask"
        newSubtask.innerHTML = `<i class="fas fa-plus"></i> New subtask`
        subTasks.appendChild(newSubtask)
        let taskFooter = document.createElement("div")
        taskFooter.classList.add("taskFooter")
        task.appendChild(taskFooter)
        let taskComplete = document.createElement("div")
        taskComplete.classList.add("taskComplete")
        taskComplete.innerHTML = `<i class="fas fa-check"></i> Task Complete`
        taskFooter.appendChild(taskComplete)
        let taskImportant = document.createElement("div")
        taskImportant.classList.add("taskImportant")
        taskImportant.innerHTML = `<i class="fas fa-exclamation"></i>`
        taskFooter.appendChild(taskImportant)
      }

      let addNewTask = document.createElement("div")
      addNewTask.classList.add("addNewTask")
      addNewTask.innerHTML = `<i class="fas fa-plus"></i> <span> New Task</span>`
      tasks.appendChild(addNewTask)
    }
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
