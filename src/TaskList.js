import React from 'react';
import { useTaskContext } from './TaskContext';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function TaskList(){
    const {tasks} = useTaskContext();
    
    return (
        <div class="lista-tarefas">
            <h2 class="titulo">To do List</h2>
            <ul class="lista">
                {tasks.map(task => (
                    <li class="item" key={task.id}>
                        {task.title}
                        <EditTask task={task} />
                        <DeleteTask task={task.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;