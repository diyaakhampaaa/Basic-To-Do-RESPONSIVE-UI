const dateElement = document.getElementById("currentDate");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// Dynamic Date

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

dateElement.textContent =
    today.toLocaleDateString("en-US", options);


// Add Task

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

});


// Delete Task

taskList.addEventListener("click", (e) => {

    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
    }

});
