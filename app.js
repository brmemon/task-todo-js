// const addButton = document.getElementById('addButton');
// const todoInput = document.getElementById('todoInput');
// const todoList = document.getElementById('todoList');
// const removeAllButton = document.getElementById('removeAllButton');
// let todos = [];

// addButton.addEventListener('click', addTodo);
// todoInput.addEventListener('keyup', function(event) {
//   if (event.keyCode === 13) {
//     addTodo();
//   }
// });
// todoList.addEventListener('click', handleTodoAction);
// removeAllButton.addEventListener('click', removeAllTodos);

// function addTodo() {
//   const todoText = todoInput.value.trim();
//   if (todoText !== '') {
//     const todo = {
//       text: todoText,
//       completed: false
//     };
//     todos.push(todo);
//     renderTodos();
//     todoInput.value = '';
//   }
// }

// function handleTodoAction(e) {
//   if (e.target.tagName === 'BUTTON') {
//     const todoIndex = parseInt(e.target.parentElement.dataset.index);
//     const action = e.target.dataset.action;

//     if (action === 'remove') {
//       todos.splice(todoIndex, 1);
//     } else if (action === 'edit') {
//       const newText = prompt('Edit todo:', todos[todoIndex].text);
//       if (newText !== null) {
//         todos[todoIndex].text = newText;
//       }
//     }

//     renderTodos();
//   }
// }

// function removeAllTodos() {
//   if (confirm('Are you sure you want to remove all todos?')) {
//     todos = [];
//     renderTodos();
//   }
// }

// function renderTodos() {
//   todoList.innerHTML = '';

//   todos.forEach((todo, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <span>${todo.text}</span>
//       <button data-action="edit">Edit</button>
//       <button data-action="remove">Remove</button>
//     `;
//     li.dataset.index = index;
//     todoList.appendChild(li);
//   });
// }









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


















































// const addButton = document.getElementById('addButton');
// const editButton = document.getElementById('editButton');
// const removeButton = document.getElementById('removeButton');
// const removeAllButton = document.getElementById('removeAllButton');
// const todoInput = document.getElementById('todoInput');
// const todoList = document.getElementById('todoList');
// const EditButton = document.createElement('button')
// const DeleteButton = document.createElement('button')
// addButton.addEventListener('click', addTodo);
// EditButton.addEventListener('click', editTodo);
// removeButton.addEventListener('click', removeTodo);
// removeAllButton.addEventListener('click', removeAllTodos);
// todoList.addEventListener('click', selectTodo);

// function addTodo() {
//   const todoText = todoInput.value;
//   if (todoText !== '') {
//     EditButton.innerHTML="Edit"
//     DeleteButton.innerHTML="Delete"
//     const li = document.createElement('li');


//     li.innerHTML = `${todoText} `;
//     li.appendChild(EditButton)
//     li.appendChild(DeleteButton)
//     todoList.appendChild(li);
//     todoInput.value = '';
//   }
// }

// todoInput.addEventListener('keyup', function(event) {
//   if (event.keyCode === 13) {
//     addTodo();
//   }
// });

// function selectTodo(e) {
//   const selectedTodo = e.target.parentElement;
//   const todos = todoList.children;
//   for (let todo of todos) {
//     todo.classList.remove('selected');
//   }
//   selectedTodo.classList.add('selected');
//   enableButtons();
// }

// function editTodo() {
//   const selectedTodo = document.querySelector('.selected');
//   if (selectedTodo) {
//     const todoText = selectedTodo.querySelector('span').textContent;
//     todoInput.value = todoText;
//     removeTodo();
//   }
// }

// function removeTodo() {
//   const selectedTodo = document.querySelector('.selected');
//   if (selectedTodo) {
//     todoList.removeChild(selectedTodo);
//     disableButtons();
//   }
// }

// function removeAllTodos() {
//   todoList.innerHTML = '';
//   disableButtons();
// }

// function enableButtons() {
//   editButton.disabled = false;
//   removeButton.disabled = false;
//   removeAllButton.disabled = F
// }

// function disableButtons() {
//   editButton.disabled = true;
//   removeButton.disabled = true;
//   removeAllButton.disabled = true;
// }

// function removeAllTodos() {
//   const confirmation = confirm('Are you sure you want to remove all todos?');
//   if (confirmation) {
//     while (todoList.firstChild) {
//       todoList.removeChild(todoList.firstChild);
//     }
//   }
// }
