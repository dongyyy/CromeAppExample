const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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
    console.log(localStorage.getItem(TODOS_KEY));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    // //TODO localStorage 제거
    // const toDos = localStorage.getItem(TODOS_KEY).split(",");
    // const index = toDos.indexOf(event.target.innerText);
    // toDos.pop(index);
    // localStorage.setItem(TODOS_KEY, toDos);
}

toDoForm.addEventListener("submit", handleTodoSummit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // String type
if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    // console.log(parseToDos); // array type
    
    parseToDos.forEach(printTodo); // 파라미터 생략 가능...ㅋㅋ
    // parseToDos.forEach(element => {
    //     printTodo(element);
    // }); // {}도 생략 가능
}