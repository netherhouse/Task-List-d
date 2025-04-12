/*
  [RU] Компонент App является главным компонентом приложения. Он объединяет все дочерние компоненты:
  форму добавления задачи (TaskForm), списки активных и завершенных задач (TaskList и CompletedTaskList),
  элементы управления сортировкой (SortControls), переключатель темы (ThemeToggle) и футер (Footer).
  Логика управления состоянием задач, сортировки и отображения секций также содержится здесь.
  
  [EN] The App component is the main container of the application. It integrates all child components:
  the task form (TaskForm), lists of active and completed tasks (TaskList and CompletedTaskList),
  sort controls (SortControls), theme toggle (ThemeToggle), and footer (Footer).
  It also handles the state management for tasks, sorting, and section visibility.
*/

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import SortControls from "./components/SortControls";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

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

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-main", "#f9f5f0");
      document.documentElement.style.setProperty("--bg-card", "#ffffff");
      document.documentElement.style.setProperty("--bg-input", "#f2ece3");
      document.documentElement.style.setProperty("--text-primary", "#2d2d2d");
      document.documentElement.style.setProperty("--text-secondary", "#605c55");
      document.documentElement.style.setProperty("--accent", "#FE8900");
      document.documentElement.style.setProperty("--accent-hover", "#E67A00");
    } else {
      document.documentElement.style.setProperty("--bg-main", "#1a1a1c");
      document.documentElement.style.setProperty("--bg-card", "#252528");
      document.documentElement.style.setProperty("--bg-input", "#35353a");
      document.documentElement.style.setProperty("--text-primary", "#f8f8f0");
      document.documentElement.style.setProperty("--text-secondary", "#c5c5b8");
      document.documentElement.style.setProperty("--accent", "#FE8900");
      document.documentElement.style.setProperty("--accent-hover", "#FF9D2E");
      document.documentElement.style.setProperty("--danger", "#FF4A4A");
      document.documentElement.style.setProperty("--success", "#00D68F");
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
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <motion.div
        className="task-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Task Manager with Priority</h1>
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
        <SortControls
          sortType={sortType}
          sortOrder={sortOrder}
          toggleSortOrder={toggleSortOrder}
        />
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
