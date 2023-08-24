import React, {useState} from 'react';
import {useTaskContext} from './TaskContext';

function AddTask(){
    const { fetchTasks } = useTaskContext();
    const [title, setTitle] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if(title.trim()){
            try{
                await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'POST',
                    body: JSON.stringify({title, completed: false}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                fetchTasks();
                setTitle('');
            }catch(error){
                console.log('Error adding task:', error);
            }
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