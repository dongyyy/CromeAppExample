const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];
const toDosKey = "todos"

function saveToDos(){
    localStorage.setItem(toDosKey, JSON.stringify(toDos));
}

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
    toDos.push(newTodo);
    printTodo(newTodo);
    saveToDos();
    console.log(localStorage.getItem(toDosKey));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    // //TODO localStorage 제거
    // const toDos = localStorage.getItem(toDosKey).split(",");
    // const index = toDos.indexOf(event.target.innerText);
    // toDos.pop(index);
    // localStorage.setItem(toDosKey, toDos);
}

toDoForm.addEventListener("submit", handleTodoSummit);