/*
  [RU] Компонент TaskList отвечает за отображение списка активных (незавершённых) задач.
  Он использует компонент TaskItem для рендеринга каждой задачи и анимирует появление отдельных элементов списка.
  
  [EN] The TaskList component is responsible for displaying a list of active (incomplete) tasks.
  It utilizes the TaskItem component to render each task and animates the appearance of list items.
*/

import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

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

export default TaskList;
