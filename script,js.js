function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <input type="checkbox" class="checkbox" onchange="toggleTask(this)">
            <button class="delete-button" onclick="deleteTask(this.parentNode)">Hapus</button>
        `;
        taskList.appendChild(li);
        document.getElementById("task").value = "";
        const addSound = document.getElementById("addSound");
        addSound.play();
    }
}

function toggleTask(checkbox) {
    const task = checkbox.parentNode;
    task.classList.toggle("checked");
    const checkSound = document.getElementById("checkSound");
    checkSound.play();
}

function deleteTask(task) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(task);
    const deleteSound = document.getElementById("deleteSound");
    deleteSound.play();
}
