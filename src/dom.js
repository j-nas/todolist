import data from "./data";

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
  };

  const selectedMenuItem = () => {
    let selection = "all";
    const set = (dataset) => {
      selection = dataset;
    };
    const get = () => {
      return selection;
    };
    return get;
  };

  const menuSelection = (dataset) => {
    const _menuItem = Array.from(document.querySelectorAll(".menuItem"));
    _menuItem.forEach((sel) => sel.classList.remove("selected"));
    let selected = document.querySelector(
      `[data-menu="${selectedMenuItem.get()}"]`
    );
    selected.classList.add("selected");
  };

  const cardComponent = ({ text, domclass, dataset }) => ({
    text,
    domclass,
    dataset,
  });

  const base = () => {
    const container = document.querySelector("#container");
    // container.innerHTML = ""; //clear all
    title();
    const _menu = document.createElement("div");
    _menu.classList.add("menu");
    container.appendChild(_menu);
    menu();
    const tasks = document.createElement("div");
    tasks.classList.add("contentArea");
    container.appendChild(tasks);
    // tasks();
  };

  return {
    base,
    menu
  };
})();

export default render;
