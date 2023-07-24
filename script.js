const inputBox = document.getElementById("task-box");
let listContainer = document.getElementById("list-container");
let taskButton = document.getElementById("task-btn");
let li = document.getElementsByTagName("li");

function createTask() {
  if (inputBox.value === "") {
    alert("Please enter a valid task");
  } else {
    console.log(inputBox.value);
    let li = document.createElement("li");
    let task = inputBox.value;
    li.append(task);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskButton.addEventListener("click", createTask);
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
