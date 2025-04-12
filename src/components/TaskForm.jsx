/*
  [RU] Компонент TaskForm отвечает за отображение формы для добавления новой задачи.
  Этот компонент принимает функцию addTask как prop и содержит локальное состояние для управления
  значениями заголовка, приоритета и дедлайна задачи. При отправке формы происходит валидация введенных данных,
  после чего вызывается функция addTask с данными новой задачи.
  
  [EN] The TaskForm component is responsible for rendering a form to add a new task.
  It receives an addTask function as a prop and maintains local state for handling the task title,
  priority, and deadline. On form submission, it validates the input and calls the addTask function with the new task data.
*/

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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

export default TaskForm;
