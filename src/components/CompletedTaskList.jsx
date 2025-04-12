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
