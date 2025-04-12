/*
  [RU] Компонент TaskItem отвечает за отображение одной задачи со всей её информацией и кнопками действий.
  Он показывает заголовок, приоритет, дату дедлайна и предоставляет кнопки для отметки задачи как выполненной
  и для её удаления.
  
  [EN] The TaskItem component is responsible for displaying a single task with its information and action buttons.
  It shows the task title, priority, and deadline while providing buttons to mark the task as completed and to delete it.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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

export default TaskItem;
