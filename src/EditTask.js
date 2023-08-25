import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

function EditTask({ task }){
    const {editTask} = useTaskContext();
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleEdit = e => {
        e.preventDefault();
        if(editedTitle.trim()){
            editTask(task.id, editedTitle);
            setEditMode(false);
        }
    };

    return(
        <div class="lista-tarefas">
            {editMode ? (
                <form onSubmit={ handleEdit }>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <button type="submit">Salvar</button>
                    <button onClick={() => setEditMode(false)}>Cancelar</button>
                </form>
            ) : (
                <div>
                    <button onClick={() => setEditMode(true)}>Editar</button>
                </div>
            )}
        </div>
    );
}

export default EditTask;