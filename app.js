
const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const removeAllButton = document.getElementById('removeAllButton');

let todos = [];

addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleTodoClick);
removeAllButton.addEventListener('click', removeAll);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push(todoText);
    updateTodoList();
    todoInput.value = '';
  }
}

function handleTodoClick(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const index = target.dataset.index;
    if (target.classList.contains('remove')) {
      removeTodo(index);
    } else if (target.classList.contains('edit')) {
      editTodo(index);
    } else if (target.classList.contains('update')) {
      updateTodo(index);
    }
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  updateTodoList();
}

function removeAll() {
  if (confirm('Are you sure you want to remove all todos?')) {
    todos = [];
    updateTodoList();
  }
}

function editTodo(index) {
  const li = document.querySelector(`li[data-index="${index}"]`);
  const todoText = li.querySelector('span').textContent;
  li.innerHTML = `
    <input type="text" value="${todoText}">
    <button class="update" data-index="${index}">Update</button>
    <button class="remove" data-index="${index}">Remove</button>
  `;
}

function updateTodo(index) {
  const li = document.querySelector(`li[data-index="${index}"]`);
  const updatedTodoText = li.querySelector('input').value.trim();
  if (updatedTodoText !== '') {
    todos[index] = updatedTodoText;
    updateTodoList();
  }
}

function updateTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.dataset.index = index;
    li.innerHTML = `
      <span>${todo}</span>
      <button class="edit" data-index="${index}">Edit</button>
      <button class="remove" data-index="${index}">Remove</button>
    `;
    todoList.appendChild(li);
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
