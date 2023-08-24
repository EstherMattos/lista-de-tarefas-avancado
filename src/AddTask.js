import React, {useState} from 'react';
import {useTaskContext} from './TaskContext';

function AddTask(){
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(title.trim()){
            const newTask = {id: Date.now(), title, completed: false};
            addTask( newTask );
            setTitle('');
        }
    };

    return (
        <div>
            <h2>Adicionar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Nova Tarefa"/>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default AddTask;