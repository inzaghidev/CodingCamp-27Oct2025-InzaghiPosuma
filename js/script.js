console.log("Hello World!");

let todoList = [];

function validateForm(todo, date) {
  if (todo.trim() === "") {
    alert("Task input cannot be empty!");
    return false;
  }
  if (date === "") {
    alert("Due date cannot be empty!");
    return false;
  }
  return true;
}

function addTodo() {
  let todoInput = document.getElementById("input-box").value;
  let dateInput = document.getElementById("todo-date").value;

  if (!validateForm(todoInput, dateInput)) {
    return;
  }

  todoList.push({ task: todoInput, date: dateInput, status: "Pending" });

  document.getElementById("input-box").value = "";
  document.getElementById("todo-date").value = "";

  renderTodo();
}

function markDone(index) {
  todoList[index].status = "Completed";
  renderTodo();
}

// Delete a single task
function deleteSingle(index) {
  todoList.splice(index, 1);
  renderTodo();
}

// Delete all tasks
function deleteTodo() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    todoList = [];
    renderTodo();
  }
}

function filterTodo() {
  let filterDate = document.getElementById("filter-date").value;

  if (!filterDate) {
    alert("Please select a date to filter tasks!");
    return;
  }

  let filteredTodos = todoList.filter((todo) => todo.date === filterDate);

  if (filteredTodos.length === 0) {
    alert("No tasks found for the selected date.");
  }

  renderFilteredTodos(filteredTodos);
}

function renderTodo() {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear list before rendering

  todoList.forEach((todo, index) => {
    let newRow = taskList.insertRow();

    let taskCell = newRow.insertCell(0);
    let dateCell = newRow.insertCell(1);
    let statusCell = newRow.insertCell(2);
    let actionsCell = newRow.insertCell(3);

    taskCell.textContent = todo.task;
    dateCell.textContent = todo.date;
    statusCell.textContent = todo.status;

    actionsCell.innerHTML = `
      <button class="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 rounded" onclick="markDone(${index})">Done</button>
      <button class="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded" onclick="deleteSingle(${index})">Delete</button>
    `;
  });
}

function renderFilteredTodos(filteredTodos) {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing tasks

  filteredTodos.forEach((todo, index) => {
    let newRow = taskList.insertRow();
    let taskCell = newRow.insertCell(0);
    let dateCell = newRow.insertCell(1);
    let statusCell = newRow.insertCell(2);

    taskCell.textContent = todo.task;
    dateCell.textContent = todo.date;
    statusCell.textContent = todo.status;
  });
}
