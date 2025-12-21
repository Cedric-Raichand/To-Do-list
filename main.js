const taskContainer = document.getElementById("Design");
const taskInput = document.getElementById("Add-list");
const form = document.getElementById("form");
const dayElement = document.getElementById("day");

function setCurrentDate() {
  const today = new Date();
  dayElement.textContent = today.toDateString();
}
setCurrentDate();

function createTask(taskText) {
  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("design-task");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("Design-checkbox");

  const task = document.createElement("p");
  task.textContent = taskText;

  checkbox.addEventListener("change", () => {
    task.classList.toggle("completed", checkbox.checked);
  });

  taskWrapper.appendChild(checkbox);
  taskWrapper.appendChild(task);
  taskContainer.appendChild(taskWrapper);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskValue = taskInput.value.trim();
    if (!taskValue) {
      alert("Please enter a valid task.");
      return;
    }

    createTask(taskValue);
    taskInput.value = "";
  });
}

