$(document).ready(function() {
    
    function loadTasks() {
        const taskCookie = getCookie('tasks');
        if (taskCookie) {
            const tasks = JSON.parse(taskCookie);
            tasks.forEach(task => addTaskToDOM(task));
        }
    }

    
    function saveTasks() {
        const tasks = $('#ft_list div').map(function() {
            return $(this).text();
        }).get();
        document.cookie = `tasks=${JSON.stringify(tasks)};path=/`;
    }

    
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    
    function addTaskToDOM(taskText) {
        const taskDiv = $('<div></div>').text(taskText);
        taskDiv.on('click', function() {
            if (confirm('Do you want to remove this TO DO?')) {
                taskDiv.remove();
                saveTasks();
            }
        });
        $('#ft_list').prepend(taskDiv);
    }

    
    $('#newTaskBtn').on('click', function() {
        const taskText = prompt('Enter a new TO DO:');
        if (taskText && taskText.trim() !== '') {
            addTaskToDOM(taskText);
            saveTasks();
        }
    });

    
    loadTasks();
});
