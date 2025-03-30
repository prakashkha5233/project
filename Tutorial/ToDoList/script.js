document.addEventListener('DOMContentLoaded', () => {    // Ensures that the script runs only after the HTML document is fully loaded
    // select all element
    const todoTitle = document.getElementById("TodoTitle");
    const todoDesc = document.getElementById("ToDoDesc");
    const addBtn = document.getElementById("addbBtn");
    const todoList = document.getElementById("todoList");

    //Load toados from LocalStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    
    // Gets the saved "todos" list from the browser's storage and converts it from text to a JavaScript array.
    // If nothing is saved, it uses an empty array instead.

    // render todo
    function renderTodos() {
        todoList.innerHTML = todos.map(
            (todo, index) => 
        `<div class="card todo-item">
                    <div class="todo-content">
                        <h3>${todo.title}</h3>
                        <p>${todo.description}</p>
                        <span class="status status-pending">Pending</span>
                    </div>
                    <!--todo action-->
                    <div class="todo-action">
                        <button onclick="editTodo(${index})" class="btn edit-btn">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onclick="deleteTodo(${index})" class="btn delete-btn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>`
        ).join("");
    }

    renderTodos();
    //add new todo annd save into localstorage
    function addTodo() {
        const title = todoTitle.value.trim();
        // Fetches the value of the `todoTitle` input, removes leading/trailing whitespace, and assigns  it to the `title` variable.
        const description = todoDesc.value.trim();
        // Fetches the value of the `todoDesc` input, removes leading/trailing whitespace, and assigns  it to the `title` variable.
        if (title) {
            // Checks if the title input is not empty (to ensure valid to-do items).
            todos.push({
                title,
                description,
            });
            // Creates a new to-do item with `title` and `description` and adds it to the list.
            todoTitle.value = "";
            todoDesc.value = "";
            // Clears the `todoTitle` & todoDesc input field.

        };
        console.log(todos);
        renderTodos();
        //save into  localstorage
        localStorage.setItem("todos", JSON.stringify(todos));
        // Saves the updated `todos` array into the browser's local storage as a string.
    }
    // delete todo
    window.deleteTodo = (todoIndex)=> {
        todos.splice(todoIndex, 1);
        //update the ui
        renderTodos();
    };

    window.editTodo = (todoIndex)=> {
        const todoToEdit = todos[todoIndex];
        todoTitle.value = todoToEdit.title||"";
        todoDesc.value = todoToEdit.description||"";
        todos.splice(todoIndex, 1);
        renderTodos();
    };
    addBtn.addEventListener('click', addTodo);
});