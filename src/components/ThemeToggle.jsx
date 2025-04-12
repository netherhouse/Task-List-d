import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </motion.button>
  );
}

export default ThemeToggle;
