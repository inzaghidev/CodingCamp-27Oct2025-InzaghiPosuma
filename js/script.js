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
  let todoInput = document.getElementById("todoInput").value;
  let dateInput = document.getElementById("todo-date").value;
  if (!validateForm(todoInput, dateInput)) {
    return;
  }
  console.log("Adding todo:", todoInput, "with due date:", dateInput);
  // Logic to add todo
  todoList.push({ task: todoInput, date: dateInput });
  renderTodo();
}

function deleteTodo() {
  console.log("Deleting all todos");
  // Logic to delete all todos
  todoList = [];
  renderTodo();
}

function filterTodo() {
  let filterDate = document.getElementById("filterDate").value;
  let filteredTodos = todoList.filter((todo) => todo.date === filterDate);
  renderFilteredTodos(filteredTodos);
}

function renderFilteredTodos(filteredTodos) {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing tasks
  filteredTodos.forEach((todo) => {
    let newRow = taskList.insertRow();
    let taskCell = newRow.insertCell(0);
    let dateCell = newRow.insertCell(1);
    taskCell.textContent = todo.task;
    dateCell.textContent = todo.date;
  });
}
