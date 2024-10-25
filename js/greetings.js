const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "username"

function onLoginSubmit(event) {
	event.preventDefault(); //브라우저의 기본 동작을 막을 수 있다.
	loginForm.classList.add(HIDDEN_CLASS_NAME);
	const username = loginInput.value;
	localStorage.setItem(USER_NAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username){
	greeting.classList.remove(HIDDEN_CLASS_NAME);
	greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USER_NAME_KEY);

if (savedUserName === null) {
	loginForm.classList.remove(HIDDEN_CLASS_NAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUserName);
}

// const clock = document.querySelector("h2#clock");
// clock.innerText = "hello";

// setInterval(sayHello, 3000)

// function sayHello(){
// 	console.log("hello")
// }