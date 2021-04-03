const taskData = (() => {
  let taskList = []
  const getTaskList = () => {
    return taskList
  }
  let idCount = 0
  const newTask = () => {
    idCount++
    let today = new Date().toISOString().slice(0,10)
    taskList.push({
      title: "untitled", 
      id: idCount,
      date: today,
      description: "Add description here",
      important: false,
      complete: false,
      project: "Add to a project",
      subtasks: []
    })

  }
  const addTitle = (dataset, newTitle) => {
    let titleTarget = taskList.filter(task => task.id == dataset)
    taskList[taskList.indexOf(titleTarget[0])].title = newTitle
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
    getTaskList,
    addDate,
    addDesc,
    addProject,
    toggleComplete,
    toggleImportant,
    getProperty,
  }
})()

export default taskData;