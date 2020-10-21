document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  
  newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTask = document.createElement("li");
    newTask.innerHTML = newTaskDescription.value += ` <button>X</button>`;
    tasks.appendChild(newTask);
    event.target.reset();
  

  tasks.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  })
})
});
