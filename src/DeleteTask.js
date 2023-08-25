import React from 'react';
import { useTaskContext } from './TaskContext';


function DeleteTask({ taskId }){
    const {deleteTask} = useTaskContext();
    
    const handleDelete = () => {
        deleteTask(taskId);
    };

    return(
        <button onClick={ handleDelete }>Deletar</button>
    );
}

export default DeleteTask;