const taskData = (() => {
  
  
  const getTasks = (sort) => {
    switch (sort) {
      case "all":
        return JSON.parse(localStorage.getItem("tasks"))
        
    
      default:
        break;
    }
  }
  //initialize local storage
  if(localStorage.getItem('idcount') == null) {
    localStorage.setItem('idcount', '0') 
    console.log("wut")
  }
  let idcount = +localStorage.getItem("idcount")
  console.log(idcount)
  const pushToLocal = (taskList) => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }
  const returnLocal = () => {
    if(JSON.parse(localStorage.getItem("tasks")) == null) {
      return []
    }
    console.log(JSON.parse(localStorage.getItem("tasks")))
    return JSON.parse(localStorage.getItem("tasks"))
  }
  const newTask = () => {
    
    let taskList = returnLocal()
    let today = new Date().toISOString().slice(0,10)
    idcount += 1
    localStorage.setItem("idcount", idcount)
    taskList.push({
      title: "untitled", 
      id: idcount,
      date: today,
      description: "Add description here",
      important: false,
      complete: false,
      project: "Add to a project",
      subtasks: []
    })
    pushToLocal(taskList)
  }

  const addTitle = (dataset, newTitle) => {
    let arr = returnLocal()
    let titleTarget = arr.filter(task => task.id == dataset)
    arr[arr.indexOf(titleTarget[0])].title = newTitle
    pushToLocal(arr)
  }
  
  const addDate = (dataset, newDate) => {
    let dateTarget = taskList.filter(task => task.id == dataset)
    taskList[taskList.indexOf(dateTarget[0])].date = newDate
  }
  const addDesc = (dataset, newDesc) => {
    let descTarget = taskList.filter(task => task.id == dataset)
    taskList[taskList.indexOf(descTarget[0])].description = newDesc
  }
  const addProject = (dataset, newProject) => {
    let projTarget = taskList.filter(task = task.id == dataset)
    taskList[taskList.indexOf(projTarget[0])].project = newProject
  }
  
  const toggleImportant = (dataset) => {
    let importantTarget = taskList.filter(task => task.id == dataset)
    let importantIndex = taskList.indexOf(importantTarget[0])
    if (taskList[importantIndex].important === true) {
      taskList[importantIndex].important = false
    } else {
      taskList[importantIndex].important = true
    }
  }
  const toggleComplete = (dataset) => {
    let completeTarget = taskList.filter(task => task.id == dataset)
    let completeIndex = taskList.indexOf(completeTarget[0])
    console.log(ompleteIndex)
    if (taskList[completeIndex].complete === true) {
      taskList[completeIndex].complete = false
    } else {
      taskList[completeIndex].complete = true
    }
  }
  const newSubTask = (dataset, subtask) => {
    let subTarget = taskList.filter(task => task.id == dataset)
    taskList[taskList.indexOf(subTarget[0])].push(subtask)
  }
  const delSubtask = (dataset, subtask) => {
    let delTarget = taskList.filter (task => task.id == dataset)
    let subtaskToDelete = taskList[taskList.indexOf(delTarget[0])]
      .subtask
  }
  const getProperty = (dataset, property) => {
    let propertyTarget = taskList.filter(task => task.id == dataset)
    return taskList[taskList.indexOf(propertyTarget[0])][property]
  }

  return {
    addTitle,
    newTask,
    getTasks,
    addDate,
    addDesc,
    addProject,
    toggleComplete,
    toggleImportant,
    getProperty,
    pushToLocal,
    returnLocal
  }
})()

export default taskData;