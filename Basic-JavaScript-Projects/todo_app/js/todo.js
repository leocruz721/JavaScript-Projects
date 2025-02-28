// Get elements from the DOM
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const todosContainer = document.getElementById('todos');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new div for the task
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    todoItem.appendChild(taskSpan);

    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => todoItem.remove();
    todoItem.appendChild(deleteButton);

    // Toggle done status when clicking the task text
    taskSpan.onclick = () => {
        todoItem.classList.toggle('done');
    };

    // Add the new task to the container
    todosContainer.appendChild(todoItem);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for the "Add Item" button
addButton.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !==null) {
        todos = JSON,parse(todos_str)
    }
    return todos;
}

function add() {
    var task = document.getElementById('task'),value;
    var todos = get_todos();
    localStorage,setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    Show();

    return false;
}

function show () {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i <todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}
docoument.getElementById('add').addEventListener('click', add);
show();
