/* elements and global variables */
const addTodoBtn = document.getElementById('add-todo-btn');
const todosNav = document.getElementById('todos-nav');
let todoListArray = [];
let todosFilter = 'all';
let filteredTodos = [];

/* localStorage functions */
const saveTodos = () => {
  const todoListJson = JSON.stringify(todoListArray);
  localStorage.setItem('todoList', todoListJson);
};

const getTodos = () => JSON.parse(localStorage.getItem('todoList')) || [];

// add a new todo
addTodoBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // get the todo text and date from inputs
  const todoText = document.getElementById('todo-text').value;
  const todoDate = document.getElementById('todo-date').value;

  // if the text and date are not empty
  if (todoText && todoDate) {
    // create a new todo object
    const todo = {
      text: todoText,
      date: todoDate,
      state: 'pending',
      id: new Date().getTime(),
    };

    // add the todo to the array
    todoListArray = [...todoListArray, todo];

    // save & load the todos
    saveTodos();

    // reset the form
    document.getElementById('todo-text').value = '';
    document.getElementById('todo-date').value = '';
  }
});