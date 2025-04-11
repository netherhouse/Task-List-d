import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSort,
  faSortUp,
  faSortDown,
  faPlus,
  faCheck,
  faTrash,
  faCalendarAlt,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.form
      className="task-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        value={title}
        placeholder="What needs to be done?"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <input
        type="datetime-local"
        required
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Task
      </motion.button>
    </motion.form>
  );
}

function TaskList({ activeTasks, deleteTask, completeTask }) {
  return (
    <motion.ul
      className="task-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <AnimatePresence>
        {activeTasks.map((task) => (
          <TaskItem
            completeTask={completeTask}
            deleteTask={deleteTask}
            task={task}
            key={task.id}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

function TaskItem({ task, deleteTask, completeTask }) {
  const { title, priority, deadline, id, completed } = task;

  return (
    <motion.li
      className={`task-item ${priority.toLowerCase()}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      layout
    >
      <div className="task-info">
        <div>
          {title} | <strong>{priority}</strong>
        </div>
        <div className="task-deadline">
          <FontAwesomeIcon icon={faCalendarAlt} />{" "}
          {new Date(deadline).toLocaleString()}
        </div>
      </div>
      <div className="task-buttons">
        {!completed && (
          <motion.button
            className="complete-button"
            onClick={() => completeTask(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faCheck} /> Complete
          </motion.button>
        )}

        <motion.button
          className="delete-button"
          onClick={() => deleteTask(id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </motion.button>
      </div>
    </motion.li>
  );
}

function CompletedTaskList({ completedTasks, deleteTask }) {
  return (
    <motion.ul
      className="completed-task-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <AnimatePresence>
        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={() => {}} // Optional since tasks are already completed
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering, array methods(map,
        filter), event handling, animations.
      </p>
    </footer>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [openSection, setOpenSection] = useState({
    taskList: true,
    tasks: true,
    completedTasks: true,
  });
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Apply theme changes
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-main", "#f5f5f5");
      document.documentElement.style.setProperty("--bg-card", "#ffffff");
      document.documentElement.style.setProperty("--bg-input", "#f0f0f0");
      document.documentElement.style.setProperty("--text-primary", "#121212");
      document.documentElement.style.setProperty("--text-secondary", "#555555");
    } else {
      document.documentElement.style.setProperty("--bg-main", "#121212");
      document.documentElement.style.setProperty("--bg-card", "#1e1e1e");
      document.documentElement.style.setProperty("--bg-input", "#2d2d2d");
      document.documentElement.style.setProperty("--text-primary", "#f0f0f0");
      document.documentElement.style.setProperty("--text-secondary", "#b0b0b0");
    }
  }, [theme]);

  function toggleSection(section) {
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
    return 0;
  });

  const activeTasks = sortedTasks.filter((task) => !task.completed);
  const completedTasks = sortedTasks.filter((task) => task.completed);

  return (
    <div className="app">
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
      </motion.button>

      <motion.div
        className="task-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Task Manager</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >
          +
        </button>
        <AnimatePresence>
          {openSection.taskList && <TaskForm addTask={addTask} />}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="task-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>Active Tasks</h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toggleSection("tasks")}
        >
          +
        </button>

        <div className="sort-controls">
          <motion.div
            className={`sort-button ${sortType === "date" ? "active" : ""}`}
            onClick={() => toggleSortOrder("date")}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <FontAwesomeIcon
              icon={
                sortType === "date"
                  ? sortOrder === "asc"
                    ? faSortUp
                    : faSortDown
                  : faSort
              }
            />
            By Date
          </motion.div>

          <motion.div
            className={`sort-button ${sortType === "priority" ? "active" : ""}`}
            onClick={() => toggleSortOrder("priority")}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <FontAwesomeIcon
              icon={
                sortType === "priority"
                  ? sortOrder === "asc"
                    ? faSortUp
                    : faSortDown
                  : faSort
              }
            />
            By Priority
          </motion.div>
        </div>

        <AnimatePresence>
          {openSection.tasks && (
            <TaskList
              completeTask={completeTask}
              deleteTask={deleteTask}
              activeTasks={activeTasks}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="completed-task-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2>Completed Tasks</h2>
        <button
          className={`close-button ${openSection.completedTasks ? "open" : ""}`}
          onClick={() => toggleSection("completedTasks")}
        >
          +
        </button>

        <AnimatePresence>
          {openSection.completedTasks && (
            <CompletedTaskList
              completedTasks={completedTasks}
              deleteTask={deleteTask}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
