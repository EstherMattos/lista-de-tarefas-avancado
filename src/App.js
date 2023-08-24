// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Aplicativo de Lista de Tarefas</h1>
        <TaskList />
        <AddTask />
      </div>
    </TaskProvider>
  );
}

export default App;
