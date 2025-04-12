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
