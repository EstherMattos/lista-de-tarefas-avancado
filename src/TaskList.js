import React from 'react';
import { useTaskContext } from './TaskContext';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function TaskList(){
    const {tasks} = useTaskContext();
    
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
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