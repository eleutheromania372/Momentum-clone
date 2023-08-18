
const LoginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const NameGreeting = document.querySelector("#greeting")

const toDoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info){
    info.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    NameGreeting.innerText = `Hello ${username}`;
    NameGreeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
