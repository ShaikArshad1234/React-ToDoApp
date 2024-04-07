import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') {
      return !task.completed;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return true;
    }
  }).filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>To-Do Actions</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
        />
  
      </div>
      <div>
        <h2>Tasks</h2>
        {filteredTasks.length === 0 ? <p>No tasks</p> :
          <ul>
            {filteredTasks.map(task => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        }
      </div>
      <div>
        <button onClick={() => setFilter('all')}>All Tasks</button>
        <button onClick={() => setFilter('active')}>Active Tasks</button>
        <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      </div>
    </div>
  );
}

export default App;
