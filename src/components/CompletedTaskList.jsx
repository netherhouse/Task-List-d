/*
  [RU] Компонент CompletedTaskList отвечает за отображение списка завершённых задач.
  Он также использует компонент TaskItem для рендеринга каждой завершенной задачи, но не предоставляет
  кнопку для завершения, так как задача уже помечена как выполненная.
  
  [EN] The CompletedTaskList component is responsible for displaying a list of completed tasks.
  It also uses the TaskItem component to render each completed task, but omits the complete button as the task is already completed.
*/

import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

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
            completeTask={() => {}}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

export default CompletedTaskList;
