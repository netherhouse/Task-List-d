/*
  [RU] Компонент SortControls отвечает за отображение кнопок сортировки задач.
  Он позволяет сортировать задачи по дате или по приоритету и визуально показывает активный метод сортировки.
  
  [EN] The SortControls component is responsible for displaying sort buttons for tasks.
  It enables users to sort tasks by date or priority and visually indicates the active sorting method.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function SortControls({ sortType, sortOrder, toggleSortOrder }) {
  return (
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
  );
}

export default SortControls;
