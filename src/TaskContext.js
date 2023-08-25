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

    const editTask = (taskId, newTitle) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, title: newTitle } : task
            )
        );
    };

    // const deleteTask = (taskId) => {
    //     setTasks(prevTasks =>
    //         prevTasks.map(task =>
    //             task.id === taskId ? { ...task, title: newTitle } : task
    //         )
    //     );
    // };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}
