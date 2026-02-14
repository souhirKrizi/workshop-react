import React, { useState } from 'react';
import './PriorityTodoList.css';

const PriorityTodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: taskInput.trim(),
        priority: priority,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#f44336';
      case 'Medium': return '#ff9800';
      case 'Low': return '#4CAF50';
      default: return '#666';
    }
  };

  return (
    <div className="priority-todo-list">
      <h2>Priority Todo List</h2>
      
      <div className="stats">
        <span className="stat">Total: {totalTasks}</span>
        <span className="stat">Complétées: {completedTasks}</span>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nouvelle tâche"
          className="task-input"
        />
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="High">Haute</option>
          <option value="Medium">Moyenne</option>
          <option value="Low">Basse</option>
        </select>
        <button onClick={addTask} className="btn btn-add">
          Ajouter
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher une tâche..."
          className="search-input"
        />
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="task-checkbox"
              />
              <span className="task-name">{task.name}</span>
              <span 
                className="priority-badge"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority}
              </span>
            </div>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="btn btn-delete"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="empty-message">
          {searchTerm ? 'Aucune tâche trouvée' : 'Aucune tâche dans la liste'}
        </p>
      )}
    </div>
  );
};

export default PriorityTodoList;
