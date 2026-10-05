let tasks = [];

const input = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let task = input.value.trim();

    
    if (task === "") {
        return;
    }

    tasks.push(task);

    tasks.sort();

    displayTasks();


    input.value = "";
    input.focus();
}

function displayTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.textContent = task + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}