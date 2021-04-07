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
    let arrTitle = returnLocal()
    let titleTarget = arrTitle.filter(task => task.id == dataset)
    arrTitle[arrTitle.indexOf(titleTarget[0])].title = newTitle
    pushToLocal(arrTitle)
  }
  
  const addDate = (dataset, newDate) => {
    let arrDate = returnLocal()
    let dateTarget = arrDate.filter(task => task.id == dataset)
    arrDate[arrDate.indexOf(dateTarget[0])].date = newDate
    pushToLocal(arrDate)
  }
  const addDesc = (dataset, newDesc) => {
    let arrDesc = returnLocal() 
    let descTarget = arrDesc.filter(task => task.id == dataset)
    arrDesc[arrDesc.indexOf(descTarget[0])].description = newDesc
    pushToLocal(arrDesc)
  }
  const addProject = (dataset, newProject) => {
    let arrProj = returnLocal()
    let projTarget = arrProj.filter(task => task.id == dataset)
    arrProj[arrProj.indexOf(projTarget[0])].project = newProject
    pushToLocal(arrProj)
  }
  
  const toggleImportant = (dataset) => {
    let arrImp = returnLocal()
    let importantTarget = arrImp.filter(task => task.id == dataset)
    let importantIndex = arrImp.indexOf(importantTarget[0])
    if (arrImp[importantIndex].important === true) {
      arrImp[importantIndex].important = false
    } else {
      arrImp[importantIndex].important = true
    }
    pushToLocal(arrImp)
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
    let taskListSub = returnLocal()
    let subTarget = taskListSub.filter(task => task.id == dataset)
    taskListSub[taskListSub.indexOf(subTarget[0])].push(subtask)
    pushToLocal(taskListSub)
  }
  const delSubtask = (dataset, subtask) => {
    let taskListSubDel = returnLocal()    
    let subTaskArray = taskListSubDel.filter
    subtaskToDelete
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
    returnLocal,
    newSubTask,
    delSubtask
  }
})()

const projectData = (() => {
  const getProjects = () => {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", "[]")
    }
    let projectList = JSON.parse(localStorage.getItem("projects"))
    return projectList
  }
  const addProject = () => {
    let projectList = JSON.parse(localStorage.getItem("projects"))
    projectList.push(`new project ${projectList.length + 1}`)
    localStorage.setItem("projects", JSON.stringify(projectList))
  }

  const deleteProject = (projectName) => {
    let deleteList = JSON.parse(localStorage.getItem("projects"))
    deleteList = deleteList.filter(elem => elem.deleteList !== projectName)
    localStorage.setItem("projects", JSON.stringify(deleteList))
  }
  const renameProject = (oldName, newName) => {
    let renameList = JSON.parse(localStorage.getItem("projects"))
    let renameIndex = renameList.indexOf(oldName)
    renameList[renameIndex] = newName
    localStorage.setItem("projects", JSON.stringify(renameList))
  }

  return {
    getProjects,
    addProject,
    deleteProject,
    renameProject
  }
})()

export { taskData, projectData };