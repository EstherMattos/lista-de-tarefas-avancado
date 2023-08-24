import React from 'react';
import { useTaskContext } from './TaskContext';

function TaskList(){
    const {tasks} = useTaskContext();
    
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;