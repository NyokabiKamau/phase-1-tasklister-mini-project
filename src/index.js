document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.value)
    document.querySelector('form').reset();
  });
});

function handleToDo(task) {
  const input = document.getElementById("new-task-description");
  let li = document.createElement("li");
  let btn = document.createElement("button")
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x';
  li.innerHTML = input.value;
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);
}

function deleteTask(e) {
  e.target.parentNode.remove();
}