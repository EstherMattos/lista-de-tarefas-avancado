import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setTasks([]);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = newTask => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}
