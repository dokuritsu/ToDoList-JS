function newTask() {
  // Grab input value from user
  var inputVal = document.getElementById("enterTask").value;

  // Check if value is empyu
  if (inputVal === "") {
    alert("Enter valid task!");
  } else {
    // Create task & add to unordered list
    var newTask = document.createElement("li");
    newTask.innerText = inputVal;
    document.getElementById("todoTasks").appendChild(newTask);

    // Add event listener to the new task
    // newTask.addEventListener("click", finishedTask());
  }

  // Clear the input
  document.getElementById("enterTask").value = "";
}

function finishedTask() {
  alert("GJ u finished task!");
}
