
function loadTasks() {
    const taskCookie = getCookie('tasks');
    if (taskCookie) {
        const tasks = JSON.parse(taskCookie);
        tasks.forEach(task => addTaskToDOM(task));
    }
}


function saveTasks() {
    const taskDivs = document.querySelectorAll('#ft_list div');
    const tasks = Array.from(taskDivs).map(div => div.textContent);
    document.cookie = `tasks=${JSON.stringify(tasks)};path=/`;
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


function createTask() {
    const taskText = prompt('Enter a new TO DO:');
    if (taskText && taskText.trim() !== '') {
        addTaskToDOM(taskText);
        saveTasks();
    }
}


function addTaskToDOM(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = taskText;
    taskDiv.addEventListener('click', function () {
        if (confirm('Do you want to remove this TO DO?')) {
            taskDiv.remove();
            saveTasks();
        }
    });
    const taskList = document.getElementById('ft_list');
    taskList.prepend(taskDiv); 
}


document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
    document.getElementById('newTaskBtn').addEventListener('click', createTask);
});
