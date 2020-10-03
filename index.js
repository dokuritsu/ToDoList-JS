function newTask() {
  // Grab input value from user
  var inputVal = document.getElementById("enterTask").value;

  // Create task & add to unordered list
  var newTask = document.createElement("li");
  newTask.innerText = inputVal;
  document.getElementById("todoTasks").appendChild(newTask);

  // Clear the input
  document.getElementById("enterTask").value = "";
}
