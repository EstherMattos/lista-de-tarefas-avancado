import React from 'react';
import { useTaskContext } from './TaskContext';


function DeleteTask({ taskId }){
    const {deleteTask} = useTaskContext();
    
    const handleDelete = () => {
        deleteTask(taskId);
    };

    return(
        <div class="lista-tarefas">
            <button onClick={ handleDelete }>Deletar</button>
        </div>
    );
}

export default DeleteTask;