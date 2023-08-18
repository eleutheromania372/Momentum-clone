const toDoList = document.getElementById("todo-list");

const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function deleteToDo(event){
    const del_li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(del_li.id));
    del_li.remove();
    saveToDos();
    if(toDos.length==0){
        toDoList.classList.add('hidden');
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.type="checkbox";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ){
    if((JSON.parse(savedToDos)).length==0){
        toDoList.classList.add("hidden");
    }
    const parsetodos = JSON.parse(savedToDos);
    toDos = parsetodos;
    parsetodos.forEach(paintToDo);
}
