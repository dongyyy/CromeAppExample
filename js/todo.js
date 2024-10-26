const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function printTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.append(li);

    button.addEventListener("click", deleteTodo);
}

function handleTodoSummit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    printTodo(newTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleTodoSummit);