// List the task list function //
var theList = [];

var task = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("todolist");

// Submit button function // 
button.addEventListener("click", () => {
  if (task.value) {
    console.log(theList);
    theList.push(task.value);
    task.value = "";
    display();
  }
});

// Display list //
function display() {
  list.innerHTML = "";
  theList.forEach((task, index) => {
    list.innerHTML +=
      "<li>" +
      task +
      "<span onclick='edit(" +
      index +
      ")'>Edit&nbsp;&nbsp;</span> <span onclick='remove(" +
      index +
      ")'>X | </span></li>";
  });
}

// Edit task list //
function edit(index) {
  var newTask = prompt("Edit your text");
  if (newTask) {
    theList.splice(index, 1, newTask);
    display();
  }
}

// Remove from the list // 
function remove(index) {
  theList.splice(index, 1);
  display();
}
