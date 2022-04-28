let $ = document;
const taskInput = $.querySelector(".task");
const userSelect = $.querySelector(".users-select");
const insertBtn = $.querySelector(".btn");

let users = [
  { name: "علی", value: "ali" },
  { name: "طه", value: "taha" },
  { name: "حکیم", value: "hakim" },
  { name: "محمد", value: "mohammad" },
];

const setUsers = () => {
  users.forEach((user) => {
    userSelect.innerHTML +=
      "<option value =" + user.value + ">" + user.name + "</option>";
  });
};

const addTaskToDo = () => {
  let taskValue = taskInput.value;
  let userValue = userSelect.value;

  let userTasks = $.querySelector("." + userValue + "-tasks");

  let taskParentElem = $.createElement("div");
  taskParentElem.classList.add("main-task");

  let trashIconn = $.createElement("i");
  trashIconn.className = "fa fa-trash";
  trashIconn.addEventListener("click", (event) => {
    removeTask(event);
  });

  let taskElem = $.createElement("h4");
  taskElem.innerHTML = taskValue;

  taskParentElem.append(taskElem, trashIconn);

  userTasks.appendChild(taskParentElem);

  taskInput.value = "";
  userSelect.value = "none";
};

const validateData = () => {
  let taskValue = taskInput.value;
  let userValue = userSelect.value;

  if (taskValue === "" || userValue === "none") {
    alert("لطفا یک تسک و کارمند را اسنتخاب نمایید");
    return falsse;
  }
  addTaskToDo();
};

const removeTask = (event) => {
  event.target.parentElement.remove();
};

window.addEventListener("load", setUsers);
insertBtn.addEventListener("click", validateData);
