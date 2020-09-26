function newTask() {
  // Create a un ordered list
  var li = document.createElement("li");

  // Grab input
  var inputVal = document.getElementById("enterTask").value;

  // Create task & add to unordered list
  var newTask = document.createElement("li");
  newTask.innerText = inputVal;
  li.appendChild(newTask);
  document.getElementById("unorderedTasks").appendChild(li);

  // Clear the input
  document.getElementById("enterTask").value = "";
}
