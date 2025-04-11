import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && deadline) {
      addTask({
        title,
        priority,
        deadline,
      });
      setTitle("");
      setPriority("Low");
      setDeadline("");
    }
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="task title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="datetime-local"
        required
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">add Task</button>
    </form>
  );
}
function TaskList({ activeTasks, deleteTask, completeTask }) {
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
          key={task.id}
        />
      ))}
    </ul>
  );
}

function TaskItem({ task, deleteTask, completeTask }) {
  const { title, priority, deadline, id, completed } = task;
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} | <strong>{priority}</strong>
        </div>
        <div className="task-deadline">
          Due: {new Date(deadline).toLocaleString()}
        </div>
      </div>
      <div className="task-buttons">
        {completed && (
          <button className="complete-button" onClick={() => completeTask(id)}>
            Complete
          </button>
        )}

        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
function CompletedTaskList({ completedTasks, deleteTask }) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={() => {}} // Optional since tasks are already completed
        />
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering, array methods(map,
        filter), event handling.
      </p>
    </footer>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState("date"); // Sort by date
  const [sortOrder, setSortOrder] = useState("asc"); // Ascending order
  const [openSection, setOpenSection] = useState({
    taskList: true,
    tasks: true,
    completedTasks: true,
  });

  function toogleSection(section) {
    setOpenSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }
  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  function toggleSortOrder(type) {
    if (sortType === type) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortType(type);
      setSortOrder("asc");
    }
  }
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortType === "date") {
      return sortOrder === "asc"
        ? new Date(a.deadline) - new Date(b.deadline)
        : new Date(b.deadline) - new Date(a.deadline);
    }
    if (sortType === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return sortOrder === "asc"
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0; // Default case
  });

  const activeTasks = sortedTasks.filter((task) => !task.completed);
  const completedTasks = sortedTasks.filter((task) => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task list with Priority</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toogleSection("taskList")}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toogleSection("tasks")}
        >
          +
        </button>
        <div className="sort-controls">
          <div
            className={`sort-button ${sortType === "date" ? "active" : ""}`}
            onClick={() => toggleSortOrder("date")}
          >
            By Date {sortType === "date" && (sortOrder === "asc" ? "↑" : "↓")}
          </div>
          <div
            className={`sort-button ${sortType === "priority" ? "active" : ""}`}
            onClick={() => toggleSortOrder("priority")}
          >
            By Priority{" "}
            {sortType === "priority" && (sortOrder === "asc" ? "↑" : "↓")}
          </div>
        </div>
        {openSection.tasks && (
          <TaskList
            completeTask={completeTask}
            deleteTask={deleteTask}
            activeTasks={activeTasks}
          />
        )}
      </div>
      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button
          className={`close-button ${openSection.completedTasks ? "open" : ""}`}
          onClick={() => toogleSection("completedTasks")}
        >
          +
        </button>
        {openSection.completedTasks && (
          <CompletedTaskList
            completedTasks={completedTasks}
            deleteTask={deleteTask}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
