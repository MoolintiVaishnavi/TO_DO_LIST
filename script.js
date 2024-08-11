const taskInput = document.getElementById('input');
const addTaskBtn = document.getElementById('btn');
const todoList = document.getElementById('div2');

function addTask() {
    const taskText = taskInput.value;
    
    if(taskText !== ''){
        const taskDiv = document.createElement('li');
        taskDiv.className='todo-item';
        console.log("working");

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        taskLabel.className = 'task-label';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            todoList.removeChild(taskDiv);
            console.log("done removing");
        };

        taskLabel.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(removeBtn);
        todoList.appendChild(taskDiv);
        taskInput.value = '';
    }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown',function(event){
    if(event.key=== 'Enter'){
        addTask();
    }
});