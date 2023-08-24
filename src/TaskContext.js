import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTasks(response.data);
        } catch(error){
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <TaskContext.Provider value={{tasks, fetchTasks}}>{children}</TaskContext.Provider>
    );
}

export function useTaskContext(){
    return useContext(TaskContext);
}