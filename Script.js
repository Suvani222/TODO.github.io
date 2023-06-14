var inputField = document.getElementById("inputField");
var list = document.getElementById("list");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var taskDescription = inputField.value;

  if (taskDescription.trim() === "") {
    // If the task description is empty, display an error message or take appropriate action
    return;
  }

  var taskElement = document.createElement("li");
  taskElement.textContent = taskDescription;

  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    list.removeChild(taskElement); // Changed 'taskList' to 'list'
  });

  taskElement.appendChild(removeButton);
  list.appendChild(taskElement);

  inputField.value = "";
});
